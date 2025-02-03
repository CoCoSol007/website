import{t,a as e}from"../chunks/disclose-version.CRH15Tq2.js";import"../chunks/legacy.B7x09vCb.js";import{$ as i}from"../chunks/runtime.DeXpxtC2.js";import{h as r}from"../chunks/svelte-head.tW1tNO1N.js";var l=t('<meta name="description" content="Explore the key axioms of Zermelo-Fraenkel set theory (ZF) and how they form the foundation of modern mathematics, addressing paradoxes and reshaping mathematical logic.">'),h=t(`<main class="p-6 max-w-3xl mx-auto"><h1 class="text-4xl font-bold text-gray-100 my-4">Structured and intuitive introduction to Zermelo-Fraenkel set theory</h1> <p class="text-lg text-gray-300 mb-1 indent-8">At the beginning of the 20th century, a number of paradoxes challenged the
    foundations of mathematics. In response, Zermelo and Fraenkel devised a
    rigorous axiomatic framework: ZF (Zermelo-Fraenkel) set theory. To better
    understand how they restructured modern mathematics, let's start by
    introducing the concept of an axiom. You've probably already heard of
    Euclid's postulates, which consists of 23 definitions, 5 geometrical
    postulates, and 9 arithmetical ones serving as the foundation of
    mathematics. An axiomatic system is simply a set of propositions considered
    true, based on human intuition and logic. For example, an axiom might be:
    “Between two points, you can always draw a straight line,” or “If a = b and
    b = c, then a = c.” These propositions should be as self-evident and
    undisputed as possible. From these axioms, mathematicians construct theorems
    through rigorous logical reasoning. In this article, we focus on
    Zermelo-Fraenkel (ZF) set theory.</p> <p class="text-lg text-gray-300 indent-8">Before examining these axioms, it's important to understand the concept of a
    set. In mathematics, a set is a collection of objects, finite or infinite,
    without order or repetition. These objects can be numbers, propositions,
    text or even other sets. Set theory is devoted to the study of sets. To
    illustrate this idea more intuitively throughout this article, let's imagine
    drawers (such as sets) containing various objects, like shoes or socks. In
    some cases, a drawer may itself contain several drawers, reflecting the
    hierarchical structure of sets.</p> <p class="text-lg text-gray-300 mt-4 indent-8">Finally, a word of clarification: this article uses mathematical and logical
    notations that may seem complex to beginners. However, understanding them is
    optional and won’t prevent you from understanding the core concepts.</p> <h2 id="overview" class="text-2xl font-bold text-gray-100 mb-2 mt-8">Axiom of extensionality</h2> <p class="text-lg text-gray-300 mb-1 indent-8">The initial axioms in this list are intuitive and introduce fundamental
    notions of set theory. The first axiom states that two sets are equal if and
    only if they contain exactly the same elements. In other words, if two
    drawers contain strictly the same objects, then they are identical. The
    second states that if every element of one set is contained in another, then
    the former is included in the latter. For example, if all the shoes in
    drawer 1 are also present in drawer 2, then drawer 1 is included in drawer
    2.</p> <p class="text-lg text-gray-300 mt-4 font-sans overflow-x-auto whitespace-pre">∀A, ∀B, ∀x( x ∈ A ⇔ x ∈ B ) ⇔ A = B</p> <p class="text-lg text-gray-300 mt-1 font-sans overflow-x-auto whitespace-pre">∀A, ∀B, ∀x( x ∈ A ⇒ x ∈ B ) ⇔ A ⊆ B</p> <h2 id="overview" class="text-2xl font-bold text-gray-100 mb-2 mt-8">Axiom of pairing</h2> <p class="text-lg text-gray-300 mb-1 indent-8">For any set X and any set Y, there necessarily exists a new set Z that
    contains only X and Y. For example, if X and Y represent 2 drawers, then set
    Z does not directly contain the objects in it but rather the drawers
    themselves. In other words, Z is a set whose elements are X and Y, which
    themselves contain their own objects. To illustrate this, imagine a large
    piece of furniture containing both drawers, each containing its own
    elements.</p> <p class="text-lg text-gray-300 mt-4 font-sans overflow-x-auto whitespace-pre">∀A, ∀B, ∃C, ∀x( x ∈ C ⇔ [ (x = A) ∨ (x = B) ] )</p> <h2 id="overview" class="text-2xl font-bold text-gray-100 mb-2 mt-8">Axiom of union</h2> <p class="text-lg text-gray-300 mb-1 indent-8">There is always a set that contains only the elements of two sets X and Y.
    With our drawer analogy, this means that for every drawer X and every drawer
    Y, there exists a new set containing all the elements of both drawer X and
    drawer Y. In other words, it's always possible to form a single drawer
    containing the entire contents of both.</p> <p class="text-lg text-gray-300 mt-4 font-sans overflow-x-auto whitespace-pre">∀A, ∀B, ∃C, ∀x( x ∈ C ⇔ [ (x ∈ A) ∨ (x ∈ B) ] )</p> <h2 id="overview" class="text-2xl font-bold text-gray-100 mb-2 mt-8">Axiom of power set</h2> <p class="text-lg text-gray-300 mb-1 indent-8">For any given set, there exists a larger set that contains only all its
    possible subsets. If we take the example of the sock drawer, this means that
    there is a bigger drawer that contains all possible ways of forming subsets
    of this drawer. For example, an empty compartment, another containing only
    the first sock, another with the first two, or yet another with only the
    second, and so on for all possible combinations.</p> <p class="text-lg text-gray-300 mt-4 font-sans overflow-x-auto whitespace-pre">∀A, ∃P, ∀X( X ∈ P ⇔ X ⊆ A )</p> <h2 id="overview" class="text-2xl font-bold text-gray-100 mb-2 mt-8">Axiom of infinity</h2> <p class="text-lg text-gray-300 mb-1 indent-8">There is a set containing an infinite number of elements, which makes it
    possible to formalize sets such as natural numbers. To understand this
    better, imagine you have a drawer containing a starting element, say “0”.
    Each time you add a new element, you create a new drawer containing “0”,
    then “0 and 1”, then “0, 1 and 2”, and so on. This process of adding
    elements can continue indefinitely. The axiom of infinity guarantees that,
    just as we can always add a new drawer containing an additional element, it
    is possible to create an infinite structure where the elements continue
    indefinitely, like the sequence of natural numbers (0, 1, 2, 3, ...).</p> <p class="text-lg text-gray-300 mt-4 font-sans overflow-x-auto whitespace-pre">∃A( ∅ ∈ A ∧ ∀n( n ∈ A ⇒ (n ∪ {n}) ∈ A ) )</p> <h2 id="overview" class="text-2xl font-bold text-gray-100 mb-2 mt-8">Axiom schema of specification</h2> <p class="text-lg text-gray-300 mb-1 indent-8">For any property P, for example “The sock is blue”, there exists a set
    containing only those elements of another set that satisfy this property. In
    other words, it's possible to create a drawer containing only blue socks
    from the original drawer, excluding all other elements. This scheme makes it
    possible to define sets according to specific characteristics.</p> <p class="text-lg text-gray-300 mt-4 font-sans overflow-x-auto whitespace-pre">∀E, ∃S, ∀x( x ∈ S ⇔ [ (x ∈ E) ∧ P(x) ] )</p> <h2 id="overview" class="text-2xl font-bold text-gray-100 mb-2 mt-8">Axiom of the empty set</h2> <p class="text-lg text-gray-300 mb-1 indent-8">There is one and only one empty set, i.e. a drawer that contains nothing.
    However, there's a little subtlety to understanding this concept: an empty
    set is not “nothing”. It's an object that exists, but contains no elements.
    We can therefore say that the empty set is a subset of every set, but this
    empty set doesn't necessarily belong to any other set. This unique set is
    denoted by the symbol <span class="text-lg font-sans">∅</span>.</p> <p class="text-lg text-gray-300 mt-4 font-sans overflow-x-auto whitespace-pre">∃∅, ∀x, x ∉ ∅</p> <h2 id="overview" class="text-2xl font-bold text-gray-100 mb-2 mt-8">Axiom schema of replacement</h2> <p class="text-lg text-gray-300 mb-1 indent-8">For any set, if one applies a well-defined function (which associates with
    each input a unique output, different from that of any other input) to each
    element, then I obtain a well-defined set. In other words, imagine a drawer
    in which, based on the objects in another drawer, each object has its color
    changed slightly. This transformation, carried out systematically, results
    in a new set, just as defined as the original.</p> <p class="text-lg text-gray-300 mt-4 font-sans overflow-x-auto whitespace-pre">∀A, (( ∀x∈A, ∃!y, φ(x,y) ) ⇒ ∃B, ∀y( y∈B ⇔ ∃x∈A, φ(x,y) ))</p> <h2 id="overview" class="text-2xl font-bold text-gray-100 mb-2 mt-8">Axiom of foundation</h2> <p class="text-lg text-gray-300 mb-1 indent-8">The foundation axiom aims to avoid paradoxes where a set could refer to
    itself, creating an infinite loop. Now imagine a drawer that contains
    several drawers, and each drawer contains other drawers. The foundation
    axiom states that there must always be a “base” drawer, which contains no
    other drawers inside. It therefore prohibits situations where a drawer
    contains another drawer that eventually contains the first one, resulting in
    an infinite regress or circular reference. In other words, every set must
    contain elements that do not lead to circular references, so there are no
    cycles or infinite references, thus preserving the logic of sets.</p> <p class="text-lg text-gray-300 mt-4 font-sans overflow-x-auto whitespace-pre">∀x[ x ≠ ∅ ⇒ ∃y( y ∈ x ∧ y∩x = ∅ ) ]</p> <h2 id="overview" class="text-2xl font-bold text-gray-100 mb-2 mt-8">Theorems</h2> <p class="text-lg text-gray-300 mb-1 indent-8">A large number of propositions can be demonstrated using the nine axioms
    mentioned above. For example, “the empty set is included in all sets”. This
    follows from the axiom of extensionality, a set A is included in a set B if
    and only if all the elements of A are also in B. In other words, if an
    element is not in B, it cannot belong to A. The empty set, having no
    elements, verifies this condition: there are no elements outside B that
    could be in the empty set. In other words, an empty set is a subset of all
    sets.</p> <p class="text-lg text-gray-300 mt-4 mb-1">Finally, it is also possible to prove many properties:</p> <ul class="list-disc list-inside space-y-1"><li>A set is always included in its union with another set.</li> <li>The set <span class="font-sans">{a}</span> is a subset of <span class="font-sans">{a, b}</span>.</li> <li>The intersection of two disjoint sets is empty.</li> <li>If <span class="italic">A ⊆ B</span> and <span class="italic">B ⊆ C</span>, then <span class="italic">A ⊆ C</span>.</li> <li>The set of natural numbers is an infinite set.</li> <li>The set <span class="font-sans">∅ ∪ A = A</span> and the set <span class="font-sans">∅ ∩ A = ∅</span>.</li></ul></main>`);function x(s){var a=h();r(n=>{var o=l();i.title="Structured and intuitive introduction to Zermelo-Fraenkel set theory",e(n,o)}),e(s,a)}export{x as component};
