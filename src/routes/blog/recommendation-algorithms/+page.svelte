<svelte:head>
  <title>The Algorithms That Shape Our Lives</title>
  <meta
    name="description"
    content="This article explains how recommendation algorithms work, the technologies behind them, and their limitations."
  />
</svelte:head>

<main class="p-6 max-w-3xl mx-auto">
  <h1 class="text-4xl font-bold text-gray-100 my-4">
    The Algorithms That Shape Our Lives
  </h1>

  <section class="text-lg text-gray-300 mb-4">
    <p class="font-semibold">authors : Lucien VILLARD & Corentin SOLOIS</p>
  </section>

  <p class="text-lg text-gray-300 mb-8 indent-8">
Imagine that tomorrow, all your relationships, whether friendly or romantic, are the result of a computer program that, based on your every move, calculates the most "optimized" friend for you. This scenario, far from science fiction, is already a partial reality thanks to recommendation systems. Today, Netflix estimates that recommendations determine 80% of the content watched by subscribers. For Spotify, personalized playlists generate half of the monthly listens for more than 8,000 artists. Through this article, we will understand how these algorithms can predict your preferences with almost perfect accuracy. To address the issue, we will first explore how these algorithms work. Then, we will deepen our understanding by examining the new technologies behind recommendation systems and their limitations.
  </p>

  <p class="text-lg text-gray-300 indent-8">
    To better understand these recommendation systems, it's important to examine how the programs behind them work. Among all the recommendation algorithms theorized today, collaborative filtering is the most popular due to its very intuitive operation. In fact, it can be summed up in one sentence: "You will like what others have liked, if they have similar tastes to yours." The process is equally simple: users and items are defined. Each user can interact with each item; to simplify, let’s summarize this interaction as a simple score, rated out of 5, given by the user for a specific item. Therefore, if two users have rated the same movies, we can calculate their similarity rate. For example, if one user rates a movie 5/5 and another rates the same movie 4/5, their similarity rate will be higher than if the second user rated it 1/5. Thus, after a certain number of movies watched, the similarity rates between each user can be calculated. If a new movie is released, when the first users watch it, their rating could provide insights on whether it should be recommended to others with similar ratings.
 </p>
  <p class="text-lg text-gray-300 mb-8 indent-8">
    In this brief description of the algorithm, the phrase "You will like what others have liked, if they have similar tastes to yours" becomes clear. Today, large companies such as Netflix, Amazon, and YouTube use this recommendation system. However, although this method seems very effective, it has its limits, such as the cold start problem (with a limited number of users or items, predictions may be unreliable) and scaling issues (the more users or items there are, the more data needs to be stored, which can exponentially overload databases).
  </p>

  <p class="text-lg text-gray-300 indent-8">
    Another popular technique used in recommendation algorithms is content-based filtering. This approach is the simplest and marked the beginning of this field. It is very easy to implement: content is categorized based on labels provided by humans, and the user is then presented with content categories that might interest them. For example, at the beginning of Netflix, users were asked to fill out a form specifying the types of movies they liked: comedies, thrillers, animations, etc. Netflix would then suggest movies corresponding to these categories. In reality, far more criteria are taken into account, such as the movie's duration, release date, cast, etc.
 </p>
  <p class="text-lg text-gray-300 indent-8">
    However, this approach posed a major problem for Netflix: it was up to the user to manually fill out what they liked. First, it was frustrating for new users to spend time filling out a questionnaire before receiving recommendations. Second, it is difficult for someone to precisely define what they like or dislike, which makes the recommendations imprecise. This is why, today, algorithms capable of "automatically" filling out this questionnaire on our behalf and updating it regularly are preferred.
 </p>
  <p class="text-lg text-gray-300 mb-8 indent-8">
    If content-based filtering is less used today, it is because it lacks precision and effectiveness. The first solution to address these issues was to invent new algorithms from scratch or refine existing ones. However, these algorithms were not effective enough for global companies. Thus, independent algorithms were abandoned, and a mix of different algorithms was introduced. This solution is simple: multiple recommendation algorithms run in parallel and their results are intelligently combined. Each algorithm does not need to be highly efficient; it is enough to have a large number of them, with minimal overlap. Algorithms that work this way are called hybrid algorithms, which are now the dominant approach.
  </p>
  
  <p class="text-lg text-gray-300 mb-8 indent-8">
    To delve deeper into this field, we can look at the use of AI in recommendation algorithms. However, it’s important to note that it is not chatbots like ChatGPT that power recommendation algorithms, but different kinds of AI. Some AIs analyze text to make recommendations, as text is ubiquitous on the internet. These AIs are not designed to interact with humans but to assess textual content; for example, some detect whether comments are positive, negative, or neutral. This type of AI enriches the database by converting unusable data (text) into usable data (numbers). Other AIs determine what might appeal to a user by using complex data like the time of day, time of year, or browsing patterns.
  </p>

  
  <p class="text-lg text-gray-300 indent-8">
    Unfortunately, to refine our preferences and function optimally, these algorithms must gather as much data about us as possible. They use two types of data: explicit data (ratings, stars, likes, direct interactions) and implicit data (history, time spent on content, preferences of friends). However, this data collection is not only aimed at offering us pleasant content but primarily at making us dependent and addicted in order to generate more profit.
 </p>
  <p class="text-lg text-gray-300 indent-8">
    Although, in everyday use, recommendation algorithms are there to help us choose the best movie or avoid wasting time finding dinner ideas, they can pose a problem in terms of what is called algorithmic radicalization. To explain this, imagine someone with somewhat conspiracy-oriented ideological leanings. If, for example, they happen to watch one or more videos claiming, for instance, that the Earth is flat, they might like them, and recommendation algorithms might start suggesting more videos or articles of the same kind. This could, over time, reinforce their beliefs and lead them to see only one perspective, potentially radicalizing their ideology. No counter-arguments would be presented, as content that could frustrate them would never be suggested.
 </p>
  <p class="text-lg text-gray-300 mb-8 indent-8">
    This tendency for algorithms to contribute to radicalization has been confirmed by several studies, although it remains controversial. For example, YouTube might more readily promote terrorist content, leading groups like Al-Qaeda to recruit online. YouTube is just one example; most platforms tend to amplify extremism. As a result, extremism is on the rise. In the United States, “lone wolves,” solo terrorists not affiliated with any group, are becoming more common. A significant problem arises today: to what extent should the law hold platforms accountable for promoting content that encourages violence and hatred?
  </p>

  <p class="text-lg text-gray-300">
      As we have seen, recommendation algorithms are omnipresent and profoundly influence our lives. Their main goal is often to create addiction to maximize corporate profits. In a world facing the challenges of climate change, it might be time to design algorithms aimed solely at enriching our experiences or promoting ethical choices, rather than stimulating an ever-increasing demand for consumption.
  </p>
</main>
