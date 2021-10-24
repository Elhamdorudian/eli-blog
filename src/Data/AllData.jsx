/*
---------------------------------------------------------
                    Importing-Images
---------------------------------------------------------
*/
import pasta from "../images/foods/pasta.jpg";
import halim from "../images/foods/halim.jpg";
import fish from "../images/foods/fish_2.jpg";
import englishBreakfast from "../images/foods/english_breakfast.jpg";
import yoga from "../images/exercise/yoga.jpg";
import swimming from "../images/exercise/swimming.jpg";
import jogging from "../images/exercise/jogging.jpg";
import tennis from "../images/exercise/tennis.jpg";
import sleep from "../images/interests/sleep.jpg";
import healthyFood from "../images/interests/healthyFood.jpg";
import enjoy from "../images/interests/enjoy.jpg";
import reading from "../images/interests/reading.jpg";
export const allItems = [
    {
      type: "food",
      img: pasta,
      names: "Chicken Alfredo Penne",
      link: "/food-blogs/",
      date: "2021/08/25",
      details:
        "My easy chicken alfredo pasta recipe is rich, creamy and the perfect antidote to hunger pangs. You're just two steps away from cheesy pasta perfection.",
      ingredients: [
        { name: "Olive oil", quantity: "1 tsp" },
        { name: "Skinless boneless chicken thighs", quantity: "4" },
        { name: "Fettuccine or Tagliatelle", quantity: "300g" },
        { name: "Double cream", quantity: "200ml" },
        { name: "grated", quantity: "½ a nutmeg" },
        { name: "Parmesan,parsley, chopped, to serve", quantity: "100g" },
        { name: "Butter", quantity: "1 tsp" },
      ],
      instructions: [
        {
          explanation:
            "Heat the olive oil in a non-stick frying pan over a medium high heat. Add the chicken thighs and fry for around 10 mins, turning half way, until they are golden brown and cooked through. Set aside to cool a little, then use two forks to shred.",
        },
        {
          explanation:
            "Bring a pan of salted water to the boil and add the pasta, cook for 1 minute less that package instructions. Whilst the pasta is cooking, add the butter to the frying pan over a medium heat, scraping the bottom a little to get any of the browned bits. Tip in the cream along with the nutmeg and bring to a simmer. Add the chicken back to the pan.",
        },
        {
          explanation:
            "Once the pasta is cooked, use tongs to transfer the pasta straight from the water into the frying pan with the cream mixture. Sprinkle most of the parmesan over and use the tongs to toss it all together, adding a splash of the pasta water if it looks a little stiff. Season well, then tip into bowls. Top with the remaining parmesan, a scattering of parsley, and black pepper.",
        },
      ],
      id: 0,
    },
    {
      type: "food",
      img: halim,
      names: "Persian Halim (Wheat and Meat Porridge)",
      link: "/food-blogs/",
      date: "2021/08/28",
      details:
        "The word Halim comes from the Arabic language meaning shredded meat. Halim is a very popular food in the Middle East, Central Asia, and the Indian subcontinent. There are many varieties of Halim based on different regions. Persian Halim is different from the Halims served in the Arabic countries, and here is what you need to know about this Persian cuisine.",
      ingredients: [
        { name: "Barley/wheat germ", quantity: "2 cups" },
        { name: "Water", quantity: "4 cups" },
        { name: "Shredded meat chuck meat", quantity: "300 g" },
        { name: "Onion", quantity: "1 Medium-sized" },
        { name: "Salt", quantity: "1 ½ tsp" },
        { name: "Pepper", quantity: "½ tsp" },
        { name: "Milk", quantity: "2 cups" },
        { name: "Cinnamon", quantity: "2 tsp" },
        { name: "Sesame seed", quantity: "A generous pinch" },
      ],
      instructions: [
        {
          explanation:
            "In a medium pot, add two cups of water, the meat of your choice (beef, lamb, chicken or turkey), two halves of a medium-sized onion, 1 ½ teaspoon salt, and ½ teaspoon pepper.",
        },
        {
          explanation:
            " Turn the heat on low and let it cook overnight In another pot, boil the remaining two cups of water and add two cups of wheat germ or barley.Let it simmer overnight on very low heat until cooked.",
        },
        { explanation: "Strain the broth and shred the meat." },
        {
          explanation:
            "Mix the shredded meat with cooked barley, pour 2 cups of whole milk to the mix, and let it simmer for thirty to forty minutes. Don’t worry about over-cooking because Halim has a paste-like consistency.",
        },
        {
          explanation:
            "Once everything is completely cooked, get your trusted blender and blend until you can’t visually tell the ingredients apart.",
        },
        {
          explanation:
            " For garnish, use cinnamon, sesame seed, and a little bit of shredded meat.You can also add a tablespoon of vegetable oil on top if you want an unhealthy but incredibly delicious version of this Halim.",
        },
        {
          explanation: "Mix the garnishes with the Halim and enjoy with bread.",
        },
      ],
      id: 1,
    },
    {
      type: "food",
      img: fish,
      names: "Traditional Fish Dish",
      link: "/food-blogs/",
      date: "2021/09/01",
      details:
        "During Nowruz, the Persian New Year, it's traditional to eat fish, a symbol of life. This version, adapted from the chef Hanif Sadr, is stuffed with bij, a mixture of chopped herbs, walnuts and pomegranate molasses that forms the base of many northern Iranian dishes. After a short turn in a hot oven, the fish emerges with crisp, brown skin. The sweet and sour herb filling contrasts with the delicate, flaky fish without overwhelming it. You can use a food processor to chop the herbs if you’d like. It's key to do the herbs in batches (don't overfill the bowl of the processor), to pulse rather than run and to stop and scrape a few times for even chopping. Work until the pieces are nice and small, about an eighth of an inch or the size of a small sunflower seed, but not so far that they begin to break down and form a paste.",
      ingredients: [
        { name: "Olive oil", quantity: "4 tsp" },
        { name: "Shallots", quantity: "2 large ones" },
        {
          name: "Finely chopped parsley,cilantro,dill and chives leaves and tender stems",
          quantity: "½ cup each",
        },
        { name: "Finely chopped scallions", quantity: "¼ cup" },
        { name: "Walnuts", quantity: "½ cup" },
        { name: "Freshly squeezed lime juice", quantity: "¼ cup" },
        { name: "Pomegranate molasses", quantity: "2 tsp" },
        { name: "Branzino or rainbow trout", quantity: "4" },
      ],
      instructions: [
        {
          explanation:
            "Heat oven to 475 degrees. Set a large frying pan over medium heat and add 2 tablespoons olive oil. When oil shimmers, add shallots and a pinch of salt. Cook, stirring occasionally, for 10 to 12 minutes until the shallots are tender and golden brown.",
        },
        {
          explanation:
            "Meanwhile, place herbs, scallions, garlic and walnuts in a large bowl. Stir well with a wooden spoon to combine.",
        },
        {
          explanation:
            "Add remaining 2 tablespoons oil to the pan, then add the herb mixture. Add a generous pinch of salt and continue to cook, stirring occasionally, until herbs begin to soften, about 4 minutes.",
        },
        {
          explanation:
            "Combine zest, orange juice and lime juice in a small bowl or glass. Add 6 tablespoons of the juice mixture to the herbs and cook another 4 minutes, until the taste of raw garlic subsides and the liquid simmers away. Add pomegranate molasses and tobiko, if using. Cook, stirring, for another 2 minutes, until molasses is absorbed. Remove from heat and let cool.",
        },
        {
          explanation:
            "Season the fish with salt, inside and out. Lay the fish open on a cutting board and drizzle 1 tablespoon juice mixture onto the flesh of each fish. Spoon about 1/4 cup stuffing inside each fish and tie closed with kitchen twine spaced 2 inches apart.",
        },
        {
          explanation:
            "Lightly drizzle a baking sheet with olive oil and lay fish on the sheet. Drizzle remaining juice over fish. Roast until flesh is opaque, flaky and firm to the touch, 18 to 20 minutes. Serve hot or at room temperature.",
        },
      ],
      id: 2,
    },
    {
      type: "food",
      img: englishBreakfast,
      names: "Full English Breakfast",
      link: "/food-blogs/",
      date: "2021/09/04",
      details:
        "A proper fry-up is a very personal thing, so feel free to swap in and out what you like best. This full English breakfrast could be topped up with baked beans, fried bread or hash browns.",
      ingredients: [
        { name: "Sausages", quantity: "2" },
        { name: "Rashers of bacon", quantity: "2-3" },
        { name: "Flat mushrooms", quantity: "2" },
        { name: "Ripe tomatoes", quantity: "1-2" },
        { name: "Thick slice of black pudding", quantity: "1" },
        { name: "Large egg", quantity: "1" },
        { name: "Slice of bread", quantity: "1" },
      ],
      instructions: [
        {
          explanation:
            "Heat the flat grill plate over a low heat, on top of 2 rings/flames if it fits, and brush sparingly with light olive oil.",
        },
        {
          explanation:
            "Cook the sausages first. Add the sausages to the hot grill plate/the coolest part if there is one and allow to cook slowly for about 15-20 minutes, turning occasionally, until golden. After the first 10 minutes, increase the heat to medium before beginning to cook the other ingredients. If you are struggling for space, completely cook the sausages and keep hot on a plate in the oven.",
        },
        {
          explanation:
            "Snip a few small cuts into the fatty edge of the bacon. Place the bacon straight on to the grill plate and fry for 2-4 minutes each side or until your preferred crispiness is reached. Like the sausages, the cooked bacon can be kept hot on a plate in the oven.",
        },
        {
          explanation:
            "For the mushrooms, brush away any dirt using a pastry brush and trim the stalk level with the mushroom top. Season with salt and pepper and drizzle over a little olive oil. Place stalk-side up on the grill plate and cook for 1-2 minutes before turning and cooking for a further 3-4 minutes. Avoid moving the mushrooms too much while cooking, as this releases the natural juices, making them soggy.",
        },
        {
          explanation:
            "For the tomatoes, cut the tomatoes across the centre/or in half lengthways if using plum tomatoes , and with a small, sharp knife remove the green 'eye'. Season with salt and pepper and drizzle with a little olive oil. Place cut-side down on the grill plate and cook without moving for 2 minutes. Gently turn over and season again. Cook for a further 2-3 minutes until tender but still holding their shape.",
        },
        {
          explanation:
            "For the black pudding, cut the black pudding into 3-4 slices and remove the skin. Place on the grill plate and cook for 1½-2 minutes each side until slightly crispy.",
        },
        {
          explanation:
            "For 'proper' fried bread it's best to cook it in a separate pan. Ideally, use bread that is a couple of days old. Heat a frying pan to a medium heat and cover the base with oil. Add the bread and cook for 2-3 minutes each side until crispy and golden. If the pan becomes too dry, add a little more oil. For a richer flavour, add a knob of butter after you turn the slice.",
        },
        {
          explanation:
            "For the fried eggs, break the egg straight into the pan with the fried bread and leave for 30 seconds. Add a good knob of butter and lightly splash/baste the egg with the butter when melted. Cook to your preferred stage, season and gently remove with a fish slice.",
        },
        {
          explanation:
            "Once all the ingredients are cooked, serve on warm plates and enjoy straight away with a good squeeze of tomato ketchup or brown sauce.",
        },
      ],
      id: 3,
    },
    {
      type: "life",
      names: "Reading",
      h: "If you don't like to read, you haven't found the right book",
      author: "-J.K Rowling",
      details:
        "Studies show that it can increase our emotional intelligence as we understand a range of perspectives and motivations. There is some evidence that mental stimulation is one of the factors that can delay the onset of dementia and reading is among the activities that can help to keep the brain active. It is far from a passive pastime. When we read we create mental simulations of the activities, sights and sounds of scenes in a story, blending these with our own memories and experiences, all of which stimulates the neural pathways. As well as this, research suggests that reading for 30 minutes a week increases health and wellbeing. Reading for pleasure has been found to improve our confidence and self-esteem, providing the grounding we need to pursue our goals and make life decisions. It can also aid our sleep and reduce feelings of loneliness. To the onlooker, reading can appear to be a solitary and passive activity. But the simple act of picking up a book can do us a world of good.",
      img: reading,
      id: 4,
      link: "/life-blogs/",
      date: "2021/09/04",
    },
    {
      type: "life",
      names: "sleep soon",
      h: "Early to bed and early to rise,makes a man healthy,wealthy and wise",
      date: "2021/09/06",
      author: "-Benjamin Franklin",
      details:
        "In an “ideal” world, you’d have the luxury of going to bed early and then waking up early, all rested for a productive day ahead. But some commitments, like job duties or child care, can make it difficult to adhere to the “early to bed, early to rise” philosophy. There are perhaps two important aspects to consider when it comes to sleep: the amount of sleep you get and the consistency in time.Going to bed while it’s dark can ensure you get enough rest while also making it easier to fall asleep. It’s also important to get the right amount of sleep on a regular basis to help prevent potential health consequences.",
      img: sleep,
      id: 5,
      link: "/life-blogs/",
    },
    {
      type: "life",
      names: "eat healthy",
      h: "You are what you eat,so don't be fast, cheap, easy or fake!",
      author: "-Unknown",
      details:
        "The key to a healthy diet is to eat the right amount of calories for how active you are so you balance the energy you consume with the energy you use. If you eat or drink more than your body needs, you'll put on weight because the energy you do not use is stored as fat. If you eat and drink too little, you'll lose weight. You should also eat a wide range of foods to make sure you're getting a balanced diet and your body is receiving all the nutrients it needs. It's recommended that men have around 2,500 calories a day (10,500 kilojoules). Women should have around 2,000 calories a day (8,400 kilojoules).",
      img: healthyFood,
      id: 6,
      link: "/life-blogs/",
      date: "2021/09/04",
    },
    {
      type: "life",
      names: "Have fun",
      h: "I'm just a kid, having fun",
      author: "-Dontrelle Willis",
      details:
        "Many of us assume that we need to make drastic changes to our habits, routines and/or bank balances to be happy and enjoy life. Fortunately, that’s not the case. Often, we already have everything we need to enjoy life—it’s just a question of prioritizing what’s really important.",
      img: enjoy,
      id: 7,
      link: "/life-blogs/",
      date: "2020/09/05",
    },
    {
      type: "exercise",
      names: "Yoga",
      date: "2021/09/19",
      details:
        "Every day I just want to tell every body that it’s time to roll out your yoga mat and discover the combination of physical and mental exercises that for thousands of years have hooked yoga practitioners around the globe. The beauty of yoga is that you don’t have to be a yogi or yogini to reap the benefits. Whether you are young or old, overweight or fit, yoga has the power to calm the mind and strengthen the body. Don’t be intimidated by yoga terminology, fancy yoga studios and complicated poses. Yoga is for everyone.",
      img: yoga,
      id: 8,
      link: "/exercise-blogs/",
    },
    {
      type: "exercise",
      names: "Tennis",
      date: "2021/09/09",
      details:
        "Whether you’ve never picked up a tennis racquet in your life, or yours has collected some dust over the years, it’s never too late to get into the game and experience the benefits of playing tennis!Participating in tennis can improve your overall health, wellness, and happiness!",
      img: tennis,
      id: 9,
      link: "/exercise-blogs/",
    },
    {
      type: "exercise",
      names: "Swimming",
      date: "2021/09/22",
      details:
        "If you were to ask me what my favourite sport is, my answer would be swimming. I started learning how to swim when I was five years old and I have been swimming ever since.There are many reasons why I love swimming but I’ll just share a few with you, and maybe I can even encourage you to go for a swim. The first reason that I love swimming is that it can be extremely relaxing. I love the feeling of floating on the water and feeling almost weightless. I find that whenever I leave the pool I feel totally relaxed. On the other hand, it can also be a fast-paced competitive sport which raises your heartbeat. It’s amazing pushing yourself to the challenge of beating someone else to the finish line and it’s great fun racing across the pool as fast as you can! Trying little tricks like underwater handstands and flips also puts a big smile on my face. Another reason that I love swimming is that it has more variety than other sports. Swimming offers many different strokes, so it doesn’t feel like you’re stuck doing the same thing over and over again. Adding swimming equipment like flippers, a snorkel or a noodle (a flexible cylindrical piece of foam) changes the experience yet again and can help you develop your swimming technique. In the summer, swimming provides a nice, refreshing break! There’s nothing better than jumping into the water on a hot, sweltering summer’s day. The pool makes you feel instantly better. And I think it adds to the summer holiday feeling, as for me the summer months are when I swim the most. It is a sport which can be done all over the world in many beautiful locations. You can choose to swim in a swimming pool or to go splash in the sea. And finally, it’s a life skill which everyone should have. Not only is it good for your health, but you never know when you’ll need your ability to swim.",
      img: swimming,
      id: 10,
      link: "/exercise-blogs/",
    },
    {
      type: "exercise",
      names: "Jogging",
      date: "2021/09/27",
      details:
        "Jogging or running is a popular form of physical activity. About one in five Australians try running (or jogging) at some stage in their life. Running is an appealing exercise because it doesn't cost a lot to take part and you can run at any time that suits you. Some runners choose to participate in fun runs, athletics races or marathons. If you are interested in competing with other runners, contact your local running club.",
      img: jogging,
      id: 11,
      link: "/exercise-blogs/",
    },
  ];