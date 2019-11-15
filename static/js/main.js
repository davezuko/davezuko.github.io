let USE_FORECAST_CACHE = false

// ----------------------------------------------------------------------------
// Countdown
// ----------------------------------------------------------------------------
export const Countdown = (() => {
	const END_DATE = new Date("1/6/2020")
	const SECOND = 1000
	const MINUTE = SECOND * 60
	const HOUR = MINUTE * 60
	const DAY = HOUR * 24
	const WEEK = DAY * 7

	let widget = document.querySelector(".countdown-widget")

	function init() {
		setInterval(update, 1000)
	}

	function update() {
		let diff = END_DATE - Date.now()
		let weeks = 0
		let days = 0
		let hours = 0
		let minutes = 0
		let seconds = 0

		while (WEEK <= diff) weeks++, (diff -= WEEK)
		while (DAY <= diff) days++, (diff -= DAY)
		while (HOUR <= diff) hours++, (diff -= HOUR)
		while (MINUTE <= diff) minutes++, (diff -= MINUTE)
		while (SECOND <= diff) seconds++, (diff -= SECOND)

		function unit(s) {
			return `<span class="countdown-widget__label">${s}</span>`
		}

		let html = ""
		function show(value, label) {
			html += `<span class="countdown-widget__unit">
                    <span class="countdown-widget__value">${value}</span>
                    <span class="countdown-widget__label">${label}</span>
                </span>`
		}

		if (weeks) show(weeks, "weeks")
		if (days) show(days, "days")
		show(hours, "hours")
		show(minutes, "minutes")
		show(seconds, "seconds")

		widget.innerHTML = html
	}

	return {init}
})()

// ----------------------------------------------------------------------------
// Weather
// ----------------------------------------------------------------------------
export const Weather = (() => {
	let APPID
	let widgets = Array.from(document.querySelectorAll(".weather-widget"))

	function debug(str, ...args) {
		console.debug(`[weather] ${str}`, ...args)
	}

	async function init(config) {
		if (!config || !config.appid) {
			throw new Error(
				"Weather needs an appid for openweathermap.org: Weather.init({ appid })"
			)
		}
		APPID = config.appid
		update()
	}

	async function update() {
		debug("start update")
		let forecast
		try {
			if (USE_FORECAST_CACHE) {
				forecast = JSON.parse(localStorage.getItem("forecast"))
			} else {
				forecast = await getForecast()
			}
			// DEBUG ONLY
			localStorage.setItem("forecast", JSON.stringify(forecast))
		} catch (e) {
			console.error("failed to get forecast: %s", e.message, e)
			scheduleUpdate()
			return
		}
		draw(forecast)
		scheduleUpdate()
	}

	async function getForecast() {
		const [current, forecast] = await Promise.all([
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?zip=37211,us&APPID=${APPID}&units=imperial`
			).then(res => res.json()),
			fetch(
				`https://api.openweathermap.org/data/2.5/forecast?zip=37211,us&APPID=${APPID}&units=imperial`
			).then(res => res.json())
		])

		function parseJSON(json) {
			console.log(json)
			return {
				raw: json,
				day: new Date(json.dt_txt),
				temp: json.main.temp,
				weather: json.weather[0]
			}
		}

		let idx = 4
		return [
			Object.assign(parseJSON(current), {day: new Date()}),
			parseJSON(forecast.list[idx]),
			parseJSON(forecast.list[idx + 8]),
			parseJSON(forecast.list[idx + 16]),
			parseJSON(forecast.list[idx + 24])
		]
	}

	function draw(forecast) {
		const days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		]

		debug("draw forecast", forecast)
		widgets.forEach((w, i) => {
			const data = forecast[i]
			const day = w.querySelector(".weather-widget__day")
			const icon = w.querySelector(".weather-widget__icon")
			const temp = w.querySelector(".weather-widget__temperature")

			if (i == 0) {
				day.textContent = "Today"
			} else if (i === 1) {
				day.textContent = "Tomorrow"
			} else {
				day.textContent = days[new Date(data.day).getDay()]
			}

			icon.src = `http://openweathermap.org/img/w/${data.weather.icon.replace(
				"n",
				"d"
			)}.png`
			temp.textContent = Math.round(data.temp) + "°"
		})
	}

	function scheduleUpdate() {
		setTimeout(update, 1000 * 60)
	}

	return {init}
})()

// ----------------------------------------------------------------------------
// Gallery
// ----------------------------------------------------------------------------
export const Gallery = (() => {
	const widget = document.querySelector(".gallery-widget")
	let masonry
	const images = [
		"13740972_134173930357300_234545737_n.jpg",
		"14026567_642010542623360_2019229792_n.jpg",
		"15043883_1258962187480604_4043027164411461632_n.jpg",
		"15275635_929609517170478_1853504453827624960_n.jpg",
		"15538803_347881262256543_7413958437387632640_n.jpg",
		"16110214_1241884305893724_7020293017915359232_n.jpg",
		"16123432_415256962155002_8534919131839856640_n.jpg",
		"16464613_1072486682861662_2096103534058536960_n.jpg",
		"16584008_250862392022905_4042360959149277184_n.jpg",
		"16789780_1875656396014284_3053076188101607424_n.jpg",
		"18879652_1814999388817458_5057587796521254912_n.jpg",
		"21041361_1770156093282307_7056860747430625280_n.jpg",
		"21147777_166477317256315_1301307505082630144_n.jpg",
		"22582664_953414648140070_8168290097704206336_n.jpg",
		"22637777_135097033731756_609496687261515776_n.jpg",
		"27892414_510645355997770_872701504455180288_n.jpg",
		"29401579_967928236713720_1349247371694833664_n.jpg",
		"30077571_2054675381467963_1715747814509641728_n.jpg",
		"31007056_2080309278894341_613269369354452992_n.jpg",
		"31905464_1935930210050810_4710512331145084928_n.jpg",
		"31997276_190931854869941_7115077946796146688_n.jpg",
		"38081819_232147114158442_6643147902384340992_n.jpg",
		"39210321_221945818678310_6568159096246108160_n.jpg",
		"39877934_213800676154027_8483023407074508800_n.jpg",
		"40167265_504252913318977_3922911012340105216_n.jpg",
		"40400020_258761614775999_710217665643831925_n.jpg",
		"40429567_321053438452105_967645386546168551_n.jpg",
		"40625853_516623935446607_2690507367639692161_n.jpg",
		"40784470_2186343101690070_8228154996251304823_n.jpg",
		"41305755_2181178018807617_5913129431908623595_n.jpg",
		"41341682_311971129385997_2434290143132082395_n.jpg",
		"41545857_291456404793344_1792621592773268513_n.jpg",
		"IMG_0016.jpg",
		"IMG_0020.png",
		"IMG_0028.png",
		"IMG_0049.png",
		"IMG_0213.png",
		"IMG_0214.png",
		"IMG_0227.png",
		"IMG_0235.png",
		"IMG_0237.png",
		"IMG_0271.jpg",
		"IMG_0287.jpg",
		"IMG_0291.png",
		"IMG_0297.jpg",
		"IMG_0319.png",
		"IMG_0354.png",
		"IMG_0363.png",
		"IMG_0409.png",
		"IMG_0452.jpg"
	]

	async function init() {
		update()
		await preloadImages()
		setInterval(update, 1000 * 10)
	}

	async function preloadImages() {
		const promises = []
		function preload(img) {
			return new Promise(resolve => {
				const node = document.createElement("img")
				node.addEventListener("load", resolve)
				node.src = `/images/${img}`
			})
		}
		for (let img of images) {
			promises.push(preload(img))
		}
		await Promise.all(promises)
	}

	async function update() {
		let images = sampleImages()
		let fragment = document.createDocumentFragment()
		for (let img of images) {
			let src = `/images/${img}`
			let div = document.createElement("div")
			div.style.backgroundImage = `url(${src})`
			div.className = "grid-item"
			fragment.appendChild(div)
		}
		widget.innerHTML = ""
		widget.appendChild(fragment)
	}

	function sampleImages() {
		let n = 5
		let source = [...images]
		let sample = []
		while (n > 0) {
			n--
			let idx = Math.floor(Math.random() * source.length)
			let img = source.splice(idx, 1)[0]
			sample.push(img)
		}
		return sample
	}

	return {init}
})()
