---
title: New to JavaScript? Avoid Angular
published: 09/18/2015
---

No, AngularJS is not that bad, at least for certain projects, and no, this isn't a prop piece for another framework that relies on belittling others. What it is, however, is an article about why AngularJS is not JavaScript, and why this is harmful for new developers.

This statement holds true (to varying degrees) for many other high-level JS frameworks, of which Aurelia, Ember, and React are among the more recognizable. Still, despite its peers, Angular stands alone with the sheer amount of domain-specific language (DSL) it introduces on top of an API surface area so broad it's often easier to just list what it _doesn't_ do. When you use Angular, you do things the Angular way; the fact that it happens to sit on top of JavaScript is simply a consequence that requires you to abide by its syntax and general laws of the land; it merely becomes a means to write Angular.

As a full MV* solution, Angular is great for companies that want standardized enterprise-y applications or for startups looking to quickly bootstrap a prototype. What it's not great for is somebody trying to learn JavaScript. Consider the common problems front-end developers face:

* Creating reusable components? Directives save the day, but make sure you understand `@`, `=`, and `&` bindings first.
* Templating? `ng-repeat` and `ng-model` are your bread and butter.
* Track model changes? The digest cycle with two-way binding has you covered.
* Filtering? Yup, Angular has a solution for that too.
* Services, factories, providers, routing, transclusion? You bet, and a whole lot more.

The issue isn't that these exist -- many people use them professionally on a daily basis (I did for a year) -- but rather that what you end up writing is not quite JavaScript.

Consider the manufactured need for utilities like `$timeout`, `$q`, and `$apply` that lack applicability anywhere outside of the Angular ecosystem. Dependency injection? That's been solved with bundlers. Although I can't really fault Angular here since the framework predated many of the tools that now exist, the criticism is still valid since any new developer could achieve reasonable separation with closures and iife's in a single file. Yes, it's messy, but they might learn a thing or two in the process, maybe dabble with the revealing module pattern or one of the many others at their disposal.

Developers should always be expanding their tool belts, and though Angular is itself a mighty tool, its power can be damaging for those new to the JavaScript world who lack the foundation that more experienced developers take for granted and rely on in order to wield something as mighty as "The Angular." New developers are still learning what a hammer is and that a nail isn't quite the same as a screw. With Angular very little of that is necessary; the tool belt is inherited and non-transferrable.

So, as much as you might loathe jQuery, remember that people often learn by making mistakes and consequently wanting to find better ways of solving problems. Let new developers get tangled in the mess of their own spaghetti code, let them forget to unbind event handlers and crumble under the weight of exceptionally redundant code. Abstractions are only powerful when you understand what it is they're abstracting; disguising knowledge shortfalls by using a language-on-a-language only opens you up to problems down the road when something goes wrong and you need to debug deeper issues or work around the framework.

What I'm saying is, let people fail and build themselves back up, and offer your help in the process. Don't push frameworks that solve problems new developers don't even know exist: concepts like encapsulation, event delegation, and best practices for interacting with the DOM, not trivial tidbits like browser inconsistencies. JavaScript is far more powerful than people give it credit for, and it's in everyone's best interest to understand it as well as possible before abstracting over it.

As an aside, it's a bit of a shame that the job market for front-end devs is the way it is, where name dropping is often more important for getting your foot in the door than fundamental knowledge. So maybe this whole diatribe is targeted at the recruiters and companies who seek developers with Angular experience but still don't know what a closure is. Whatever the reason, the moral remains the same: if you want to become a strong developer, invest your time and effort in understanding the core constructs of the language, and not just in what's popular at the time. You'll be far ahead of those who chose differently, especially when the popular framework changes next month.
