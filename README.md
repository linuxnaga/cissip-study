# CISSP Command Center

A gamified CISSP exam preparation app: practice quizzes with explanations, a timed exam simulator, and spaced-repetition flashcards for all 8 CISSP domains. It is plain HTML, CSS, and JavaScript with no build step, and it works offline.

## Run it

Open `index.html` in a browser. Double-clicking the file works too, because question banks load as script files rather than over fetch.

To serve it locally:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Features

- **Dashboard** with level, rank, XP bar, daily streak, accuracy, and per-domain mastery.
- **Practice mode** per domain (10, 25, 50 questions, or the full bank, plus "new only" and "missed" sets). It gives instant feedback with explanations, a combo multiplier, and XP for correct answers.
- **Exam simulation** with a timer, flag-for-review, a question navigator, questions weighted by the official domain percentages, and a per-domain score breakdown.
- **Flashcards** with Leitner spaced repetition: 6 boxes, and Again, Good, or Easy ratings.
- **Badges, levels, and streaks**, with progress stored in `localStorage`. You can export and import progress from the Profile page.
- **Keyboard shortcuts**: `A`–`D` or `1`–`4` to answer, `Enter` for next, `Space` to flip a card, `1`/`2`/`3` to rate a card.

## Content status

| Domain | Questions | Flashcards |
| --- | --- | --- |
| D1 Security and Risk Management | 118 | 81 |
| D2 Asset Security | 110 | 63 |
| D3 Security Architecture and Engineering | 112 | 71 |
| D4 Communication and Network Security | 110 | 58 |
| D5 Identity and Access Management | 103 | 56 |
| D6 Security Assessment and Testing | 102 | 51 |
| D7 Security Operations | 103 | 56 |
| D8 Software Development Security | 102 | 60 |
| **Total** | **860** | **496** |

Questions are original practice items written against the topics in the ISC2 CISSP exam outline. They are not copied from the Official Study Guide or from real exam questions.

## Adding a domain

Create `data/dN-<slug>.js` following `data/d1-security-risk-management.js`, then add a `<script>` tag for it in `index.html`.

```js
Q(topic, difficulty /* 1-3 */, "Question?", ["Correct answer", "Distractor", "Distractor", "Distractor"], "Explanation");
F(topic, "Flashcard front", "Flashcard back");
```

List the correct option first; the app shuffles options at runtime. IDs are assigned by position, so append new items at the end to keep users' saved progress valid.

## Layout

```
index.html                 app shell
css/styles.css             theme
js/app.js                  quiz, exam, flashcard, and gamification engine
data/domains.js            domain catalog and exam weights
data/d1-*.js ... d8-*.js    questions and flashcards, one file per domain
```
