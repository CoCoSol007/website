<script>
  import img1 from "../../../assets/infinity/1.png";
  import img2 from "../../../assets/infinity/2.png";
  import img3 from "../../../assets/infinity/3.png";
  import img4 from "../../../assets/infinity/4.png";
  import img5 from "../../../assets/infinity/5.png";
  import img6 from "../../../assets/infinity/6.png";
  import img7 from "../../../assets/infinity/7.png";
</script>

<svelte:head>
  <title>Greater Than Infinity?</title>
  <meta
    name="description"
    content="An in-depth exploration of infinity through bijections, Hilbert’s Hotel, and Cantor’s diagonal argument, revealing the counter-intuitive nature of infinite sets."
  />
</svelte:head>

<main class="p-6 max-w-3xl mx-auto">
  <h1 class="text-4xl font-bold text-gray-100 my-4">
    Greater Than Infinity?
  </h1>

  <section class="text-lg text-gray-300 mb-4">
    <p class="font-semibold">authors: Lucien VILLARD &amp; Corentin SOLOIS</p>
  </section>

  <p class="text-lg text-gray-300 mb-1 indent-8">
    Imagine a monkey in front of a computer, randomly hitting keys without any thought or intention. The keys are struck in complete chaos. Yet, if we let this monkey type indefinitely, the magic of probability comes into play: somewhere, amidst all these absurd combinations, a line of Shakespeare, a poem by Rimbaud, or even the entirety of the Harry Potter novel could appear. This mind-boggling idea, known as the infinite monkey theorem, plunges us into the heart of the concept of infinity. In the same spirit, Borges’ “Library of Babel” pushes this principle to its extreme: it contains every possible book, every conceivable combination of letters—from the greatest literary masterpiece to the most utter nonsense. In this fascinating universe, every book already exists, whether it is a very precise description of your day or a jumble of meaningless words. Understanding the concept of infinity is a daunting task for our brain, as it is an abstract and unusual concept that can lead to counter-intuitive conclusions.
  </p>
  <p class="text-lg text-gray-300 indent-8">
    In common parlance, infinity refers to something that has no limit or end. In mathematics, as well as in this article, we will consider infinity as the size of certain sets, for example, that of the set of all even numbers. Before we begin, it is important to clarify that we do not mean infinity as the limit value of a sequence or function.
  </p>

  <img src={img5} alt="intro" class="w-1/2 mx-auto" />

  <p class="text-lg text-gray-300 mt-4 indent-8">
    To start gently, let’s imagine a bag containing apples and another filled with potatoes. To know if they contain the same number of items, we could empty both bags and pair each apple with a potato, one by one. In doing so, we establish a correspondence between each potato and each apple, and vice versa. If an apple or a potato remains without a partner, then the sets do not have the same size. However, if every item finds a unique match, we have just created what is called a bijection. In other words, each element of one set (the potatoes) corresponds to one and only one element of the other set (the apples), and this correspondence works both ways.
  </p>

  <p class="text-lg text-gray-300 mt-8 indent-8">
    Before defining the bijection more rigorously from a mathematical standpoint, let me introduce some notations to make the formulas clearer. We denote by Card(E) the size of set E, that is, the number of elements it contains. Thus, writing Card(E) = Card(F) means that E and F are two sets with exactly the same number of elements. Later in this article, we will see why talking about the "number of elements" reaches its limits, especially when it comes to infinite sets. A bijection is mathematically noted by the formula:
  </p>

  <p class="text-lg text-gray-300 mt-2 font-sans overflow-x-auto whitespace-pre">
    Card(E) = Card(F) ⇔ ∃f:F → E, ∀y ∈ E, ∃! x ∈ F, f(x) = y
  </p>

  <p class="text-lg text-gray-300 mt-2 indent-8">
    Understanding this notation is not absolutely necessary to grasp the overall idea. In plain language, it means: "The size of E is equal to the size of F if and only if there exists a function f such that, for every element y in E, there exists a unique element x in F verifying f(x) = y."
  </p>

  <p class="text-lg text-gray-300 mt-8 indent-8">
    Making a bijection with bags of potatoes and apples is quite intuitive (even if the term bijection seems difficult) or even with another finite set, it remains rather clear. However, as soon as we face infinite sets, the bijection is not so straightforward, even for the great mathematicians of the past. Indeed, Galileo, in his book <em>Two New Sciences</em>, mentions the idea of establishing a bijection with infinite sets. His reasoning is simple: each whole number has one and only one square. By bijection, we deduce that there are as many integers as there are squares.
  </p>

  <img src={img6} alt="intro" class="w-full" />

  <p class="text-lg text-gray-300 mt-4 indent-8">
    This idea of a bijection on infinite sets may seem a bit hazy. Don’t worry, even Cantor found it strange! In fact, even with the simplest numbers, like the natural numbers (ℕ), some situations can quickly appear counter-intuitive. A great example to illustrate this is Hilbert’s Hotel. Imagine a perfectly ordinary hotel, with one exception: it has an infinite number of rooms. These rooms are numbered with natural numbers: 0, 1, 2, 3, … and so on, to infinity. Of course, such a hotel is impossible in reality, but let’s use it as an illustration. Now suppose that a new guest arrives while the hotel is already full. One might think that he would have to leave… but no! In this particular hotel, there is always room. It is enough for each guest to move to the next room: the guest in room 0 goes to room 1, the guest in room 1 goes to room 2, and so on. In this way, room 0 is freed and the new guest can settle in. Mathematically, this means that adding one element to the set of natural numbers does not change its size.
  </p>

  <p class="text-lg text-gray-300 mt-2">
    Card(ℕ) = Card(ℕ ∪ &#123;A&#125;) where A is the element added to ℕ
  </p>

  <img src={img4} alt="intro" class="w-full" />

  <p class="text-lg text-gray-300 mt-4 indent-8">
    Similarly, if a second guest arrives, the same technique is applied, and he can enter the hotel. We then have Card(ℕ) = Card(ℕ ∪ &#123;A, B&#125;) where A and B are the two elements added to ℕ. This reasoning can be repeated with 3, 4, 5 additional people, and so on. We then see that by repeating this approach indefinitely, as many extra guests as desired can enter the hotel. Mathematically, this means that adding a finite number of elements to ℕ does not change its cardinality.
  </p>

  <p class="text-lg text-gray-300 mt-2">
    Card(ℕ) = Card(ℕ ∪ E) where E is the finite set of elements added to ℕ
  </p>

  <p class="text-lg text-gray-300 mt-4 indent-8">
    For now, only a finite number of people have been able to enter the already full hotel. But what happens if a bus with an infinite number of people arrives at the hotel and unloads all its passengers? We know that all the people on the bus have a seat numbered by a natural number (0, 1, 2, 3, …). Well, it’s simple: to accommodate everyone, we just apply this method: the hotel guests take the even numbers and the bus passengers take the odd numbers.
  </p>

  <img src={img7} alt="intro" class="w-full" />

  <p class="text-lg text-gray-300 mt-4 indent-8">
    This is mathematically expressed as: Card(ℕ) = Card(ℕ₁ ∪ ℕ₂) where ℕ₁ and ℕ₂ are two distinct sets, each with the same cardinality as ℕ. Since the seat numbers of the bus (ℕ₂) can be non-zero negative numbers, we have: Card(ℕ) = Card(ℕ ∪ ℤ₀⁻) where ℤ₀⁻ is the set of negative integers different from zero, that is: Card(ℕ) = Card(ℤ) where ℤ is the set of all integers (both positive and negative).
  </p>
  <p class="text-lg text-gray-300 mt-4 indent-8">
    Now, imagine an even more improbable situation. The hotel is completely empty and a train containing an infinite number of buses, each with an infinite number of people, arrives. Each bus is numbered with an integer, and each person has two numbers: one for their seat and one for their bus. It obviously seems impossible for everyone to fit in the hotel and yet, they do. Indeed, with one technique, everyone can be accommodated.
  </p>
  <img src={img1} alt="intro" class="w-1/2 mx-auto" />

  <p class="text-lg text-gray-300 mt-4 indent-8">
    In this diagram, we see a row and a column of numbers; this corresponds to each person having two associated numbers. Therefore, each person corresponds to a point on the grid. The entire technique lies in the yellow line. In fact, the yellow line starts at the point (0, 0) and then passes exactly once through each of the other points on the grid in a certain order. Thus, at each point, we can assign a number: the number of points that come before it along the line. In this way, each point, hence each person, has a unique number assigned to them: everyone can indeed enter the hotel.
    Mathematically, we denote the set of pairs of numbers (bus number and seat number) by ℕ × ℕ, also noted as ℕ². We thus have:
    Card(ℕ) = Card(ℕ × ℕ) = Card(ℕ²).
  </p>
  <p class="text-lg text-gray-300 mt-4 indent-8">
    Similarly, if a boat arrives containing an infinite number of trains, each with an infinite number of buses with an infinite number of people, everyone can find a room in the hotel. In fact, we have just shown that each person on the train is assigned a unique integer, so all the people on the train can fit into a single bus. We then have a situation where a boat with an infinite number of buses is equivalent to the previously described scenario with a train containing an infinite number of buses; it’s just that here we have a boat instead of a train. Thus, by applying the previous reasoning, we show that every person on the boat has a unique number. Moreover, each person on the boat has three numbers: that of the train, the bus, and the seat. Therefore, the set of triplets of three integers is the same size as the set of natural numbers: Card(ℕ) = Card(ℕ × ℕ × ℕ) = Card(ℕ³), where ℕ × ℕ × ℕ, also noted as ℕ³, is the set of triplets of integers (train, bus, seat).
  </p>
  <p class="text-lg text-gray-300 mt-4 indent-8">
    By repeating the reasoning with a spaceship containing an infinite number of boats, we have: Card(ℕ) = Card(ℕ × ℕ × ℕ × ℕ) = Card(ℕ⁴), where ℕ × ℕ × ℕ × ℕ, also noted as ℕ⁴, is the set of quadruplets of integers (boat, train, bus, seat). More generally, we note that for any non-zero natural number n: Card(ℕ) = Card(ℕⁿ), where ℕⁿ is the set of n-tuples of integers.
  </p>
  <p class="text-lg text-gray-300 mt-4 indent-8">
    Hilbert’s Hotel is therefore a very peculiar and strange hotel that often leaves one with a headache. Indeed, one might think that after seeing all these spaceships, boats, trains, and buses enter, everyone could be accommodated. And yet, that is not the case: a group of people numbered with real numbers will never be able to be accommodated. Why? Because the set of real numbers is much larger and more complex than that of natural numbers. To better understand this difference, one must examine the notion of bijection from another perspective.
  </p>
  <p class="text-lg text-gray-300 mt-4 indent-8">
    Trying to establish a bijection between ℕ and a set E comes down to asking whether it is possible to create an infinite list in which every element of E would appear. Indeed, a bijection would then consist in associating the first element of the list with number 1, the second with number 2, and so on. This is why we say that E is a countable or discrete set. In mathematics, there exists a set that is a little less trivial than those we have seen so far: the set of real numbers, denoted ℝ. Intuitively, ℝ can be defined as the set of "all numbers" that we use to measure, count, or describe continuous quantities. Thus, numbers such as 1, -1, 0.5, ⅓, √2 or π are included. After all this discussion, one might think that there exists a bijection between this set and ℕ, and that Card(ℝ) = Card(ℕ), meaning that all infinite sets would have the same size. Yet, this is not the case… The first to demonstrate this difference was Georg Cantor, thanks to his famous diagonal argument.
  </p>
  <p class="text-lg text-gray-300 mt-4 indent-8">
    Until then, all the sets studied were, without exception, countable sets. Indeed, there exists an infinity of lists that can cover all of their elements.
  </p>

  <img src={img3} alt="intro" class="w-1/2 mx-auto" />

  <p class="text-lg text-gray-300 mt-4 indent-8">
    Cantor’s entire argument is based on the fact that it is impossible to list all the elements of ℝ. To make it easier to understand, let us focus on just one part of ℝ: the interval [0,1]. We thus seek to prove that Card([0,1]) > Card(ℕ). For this, we will use a proof by contradiction. A proof by contradiction consists of assuming that what we want to disprove is true (in our case, that [0,1] is countable), and then arriving at a paradoxical or absurd conclusion. Postulate: Suppose that [0,1] is countable. This means that all the elements of [0,1] can be arranged in a list. The problem highlighted by Cantor’s diagonal argument is as follows: We will construct a number in the following manner: The first digit of this number will be equal to the first digit of the first number +1. The second digit will be equal to the second digit of the second number +1. In general, the n-th digit will be equal to the n-th digit of the n-th number +1. Thus, the number we have just created will differ from the first number by its first digit, differ from the second number by its second digit… differ from the n-th number by its n-th digit.
  </p>

  <img src={img2} alt="intro" class="w-full" />

  <p class="text-lg text-gray-300 mt-4 indent-8">
    The number thus created is not part of the list, and yet, it belongs to [0,1]. This is absurd, because we assumed that all the elements of [0,1] were included in the list. This means that our postulate is false: [0,1] is not countable. In other words, Card([0,1]) > Card(ℕ).
  </p>

  <p class="text-lg text-gray-300 mt-4 indent-8">
    In the same way that we previously established that Card(ℕ) = Card(ℕⁿ), we can extend this reasoning to the reals. Thus, for every n ∈ ℕ, we have Card(ℝ) = Card(ℝⁿ). Even more surprisingly, Card([0,1]) = Card(ℝⁿ). Given that we consider our universe as evolving in ℝ³, this means that it is theoretically projectable and of the same "size" as the interval [0,1].
  </p>

  <p class="text-lg text-gray-300 mt-4 indent-8">
    Until now, we have talked about the cardinality of ℝ and ℕ without really discussing the consequences of their strange sizes. However, the fact that ℝ is larger than ℕ brings about more than one oddity:
  </p>

  <p class="text-lg text-gray-300 mt-4 indent-8">
    First of all, let’s assume without proof that a computer can save text in a bijective manner (there is only one possible file corresponding to the text that has been typed). Yet, everyone knows that a computer only saves things as a series of 0s and 1s. Therefore, any text can be saved using a sequence of 0s and 1s. This means that there is a bijection between the text and any sequence of 0s and 1s. Moreover, mathematicians have long proven that a series of 0s and 1s is nothing other than a natural number (this follows directly from base 2). Hence, a text can be saved using a single natural number (ℕ); that is, there is a bijection between the set of all possible texts and ℕ. But we have shown that ℝ is larger than ℕ. Thus, ℝ is also larger than the set of all possible texts. This means that there exist real numbers that cannot be precisely designated with language. In other words, if you look at a segment, you can be sure that there are points on that segment that cannot be described using words, and you do not know where they are. Even more, since the infinity of the reals is much larger than that of the natural numbers, one can conclude that if you pick a point at random on a segment, it is almost certain that you will not be able to designate it with words.
  </p>

  <p class="text-lg text-gray-300 mt-4 indent-8">
    This reasoning clearly shows that infinity is a concept that we can know and master, yet it will always remain incomprehensible.
  </p>

  <p class="text-lg text-gray-300 mt-4 indent-8">
    In this article, we have only skimmed the fascinating world of mathematics, but many other equally counter-intuitive questions remain to be explored. For example, do there exist infinite sets E such that Card(ℝ) > Card(E) > Card(ℕ)? Do there exist sets of ever larger sizes or, conversely, can we find sets with an ever smaller cardinality?
  </p>
</main>
