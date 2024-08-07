Hou tu pranownse Inglish
========================

© 2000 by Mark Rosenfelder

* * *

Everybody agrees that **English spelling is horrible**.

There have been almost as many proposals for **spelling reform** as there are rewrites of Esperanto. (Tellingly, there has been precisely one success in each category-- Noah Webster and Ido-- and neither caught on universally.) Most of these proposals spend their energy **fixing what isn't broken**. For instance, they search hard for clever new ways of spelling the **ch** sound-- even though ch does the job just fine in hundreds of languages. Or, they insist on 'correcting' the Great Vowel Shift, using Italian values for the vowels.

Whenever the subject comes up, someone is sure to bring up all the words in \-ough, or George Bernard Shaw's ghoti\-- a word which illustrates only Shaw's wiseacre ignorance. English spelling may be a nightmare, but it does have rules, and by those rules, ghoti can only be pronounced like goatee.

The purpose of this page is to describe those rules-- to **explain the system behind English spelling**, the rules that tell you how to pronounce a written word correctly over **85% of the time**.

Many people expect the opposite as well-- to predict the spelling from the pronunciations-- not realizing that few orthographies meet this goal. It's far from true of Spanish, for instance, which is often held up as an example of a good orthography. I stopped fervently admiring Spanish orthography when I saw a sign in a Mexican bakery with about one spelling mistake every third word.

Several different types of people might be interested in this page:

*   foreign learners of English
*   native speakers who never quite mastered English spelling
*   spelling reformers who care to understand the system they want to replace
*   linguists interested in how an inadequate alphabet is manhandled to fit an unruly language.

I've also included a sample lexicon and a set of spelling rules which you can use with my [Sound Change Applier](sounds.htm) to automatically derive the pronunciation.

* * *

> _Thanks to Éamonn McManus, Aaron J. Dinkin, Dennis Paul Himes, Geoff Eddy, Hirofumi Nagamura, and John Cowan for useful comments and ideas, which I've tried to incorporate here._

* * *

The sounds of General American
------------------------------

If we're discussing spelling, we have to discuss sounds as well; and this means choosing a reference dialect. I'll use my own, of course-- a version of General American that's unexcitingly close to the standard. I'll call it GA below.

Here's the vowels and consonants of my dialect. For each I give the IPA, the representation in the eccentric phonemic transcription I use in this document, and a couple of sample words.

The IPA is given in Unicode; if it doesn't look right you have a nasty old non-Unicode-compliant browser.

### Who cares about dialects?

Ideally you shouldn't have to worry about my dialect at all: you could simply take (say) ɛ to represent whatever _you_ pronounce as the vowel in met. Unfortunately, English dialects are not uniform enough to share a single phonology. There are many words that are not only _pronounced_ differently in different dialects-- that is, they have a distinct _phonetic_ realization-- but also have their own _phonemic_ representation.

Some examples:

*   GA is rhotic-- we pronounce the post-vocalic r's-- while other important dialects are not, notably the British standard, RP.
*   I distinguish cot and caught, Don and Dawn; these vowels (ɑ, ɔ) merge in the US West.
*   On the other hand, I merge the vowel sounds in Mary, merry, and marry, which are distinguished in Eastern US dialects and in RP.
*   I pronounce w and wh the same.

### Notational conventions

**Spellings** are in teal italics; **pronunciations** are in blue Courier. This convention avoids cluttering the text with brackets and quotation marks.

Thus g refers to the letter , while g refers to the sound /g/, and I will write that laugh is pronounced [læf].

Linguists can take the 'pronunciations' as **phonemic**; e.g. I haven't attempted to indicate aspiration, the flapping of medial t and d, the appearance of clear and dark l, etc. I indicate some but not all vowel reductions (basically, those that are reduced in all forms of the morpheme).

\# represents the beginning or end of a word. For instance, #rh represents an rh that begins a word; g# refers to a final g.

Capital letters represent variables; e.g. V represents any vowel.

The computer simulation
-----------------------

Along with this explanatory page, I've put up

*   a [sample lexicon](english.lex) of over 5000 English words
*   a [sound change file](english.sc) giving the spelling rules
*   [sample output](english.out) from the [Sound Change Applier](sounds.html)

The lexicon includes the target pronunciation in GA; I modified the program to compare the results of the rule application with the target. **The results**:

*   3079 (or **59%**) of the pronunciations are generated **perfectly**.
*   4389 (or **85%**) are generated perfectly or with only **minor errors**: vowel length errors, failure to reduce vowels to ə, or failure to voice an _s_.

This is impressive; but it **understates the systematicity** of English spelling:

*   Many of the errors are off in only one segment. (E.g. the rules predict everything about bachelor except the loss of the middle vowel. Shouldn't they get some credit for getting six segments correct?)
*   Many of the pronunciations are really predictable using rules beyond the scope of the Sound Change Applier. I haven't by any means found every possible rule, or stated them in the best, most general form.
*   The worst offenders in the language are already included in the sample; a larger vocabulary would include a higher percentage of well-behaved spellings.

There is [a fuller discussion of the mispredictions](#irregular) at the end of the document.

The **odd phonetic transcription**, by the way, derives from the dual need to easily represent sounds both in html and in the sound change file. I'm restricted to characters that html supports; and I can't use capital letters, because I need them for variable definitions in the rules. As a mnemonic, think of the umlauts as colons, so that oʊ is short for o:, 'long o'.

The wacky spellings I used for the **vowels**, however, are inherent in the logic of English spelling. It would only obscure how the system works if I represented the long and short vowels with IPA forms.

The rules
---------

The bulk of this page is basically a **human-readable restatement of the rules** in the sound change file

The **order** of the rules is important. The rules can be thought of as a **recipe**: to pronounce a word, you go down the list of rules, seeing if each one in turn applies, and applying it if it does.

The result is sometimes a little backwards in terms of explaining the system, because **exceptions come first**, before the general rules. That's the best way to teach the computer; but humans tend to do best by learning the most general rule first.

I'll warn you: some of these rules are going to seem **mondo obscure**. That's because I've tried to find every regularity I could, even if it only explains half a dozen words. The yield of some rules may be small enough that some people would rather just learn the affected words as irregularities. But if anything I'm _more_ interested in the minor regularities; they're puzzles, often unfamiliar ones, and many are the fossils of minor sound changes.

To head off another likely reaction: yes, **you can find exceptions** to the rules. I'm perfectly aware that ough is not _always_ pronounced oʊ. The point is, what follows are the _default_ rules that work 85% of the time. Think of oʊ as the default pronunciation of ough; any other pronunciation of ough is an irregularity.

And finally: I'm aware that some linguists (e.g. Edward Carney) have also worked on these problems; unfortunately, I've only seen their work in summaries. I've tried to be careful and linguistically informed, but I don't claim to have committed a work of scholarship.

### Some rewrites

English has more phonemes than the alphabet has available symbols; the usual expedient of the orthography for solving this problem is to use digraphs. (Both the problem and the solution are inherited from Latin, which had hardly finished tossing out the Greek letters it didn't think it needed when it started to borrow Greek words that needed them.)

1. Make the following unconditional replacements:

<table border=1 cellspacing=0 cellpadding=0>
	  <td> <cite>ch</cite>     
	  <td> <tt>tʃ</tt>    
	</tr><tr>
	  <td> <cite>sh</cite>
	  <td> <tt>ʃ</tt>
	</tr><tr>
	  <td> <cite>ph</cite>
	  <td> <tt>f</tt>
	</tr><tr>
	  <td> <cite>th</cite>
	  <td> <tt>θ</tt>
	</tr><tr>
	  <td> <cite>qu</cite>
	  <td> <tt>kw</tt>
	</tr><tr>
	  <td> <cite>wr</cite>
	  <td> <tt>ɹ</tt>
	</tr><tr>
	  <td> <cite>wh</cite>
	  <td> <tt>w</tt>
	</tr><tr>
	  <td> <cite>xh</cite>
	  <td> <tt>x</tt>
	</tr><tr>
	  <td> <cite>rh</cite>
	  <td> <tt>ɹ</tt>
	</tr>
	</table>

Before an o, replace wh with h instead: who, whore, whole.

If you're one of those fossils who still use a voiceless w or another strange contortion to distinguish wh and w, you'd modify this rule.

We can do significantly better than the program if we don't do these substitutions when the digraph spans a morpheme boundary. In other words, we shouldn't do the replacement in compound words like bosshood, flathead, uphill, or perhaps.

We can also do better if we replace ch with k in words of Greek and Hebrew origin-- that is, in two-dollar words like archaism or trochaic or Malachi.

The program actually replaces only initial rh, since medial rh is so likely to be found in a compound (and it doesn't occur finally in the sample lexicon).

(xh isn't really a digraph; the rule just reflects the fact that an initial h isn't pronounced after a prefix ending in x, as in exhibit.)

2. Replace x with ks; but after e and before another vowel, use gz instead. (This is not an allophonic rule: compare the near-minimal pair exist and excite.)

3. Ignore apostrophes (can't, cop's, o'clock). Hyphens can however be treated as word separators (mother-in-law is pronounced like mother in law).

### The notorious gh

4. Before a vowel, gh becomes g: ghost = goʊst.

5. gh turns a preceding single vowel long: right = raɪt.

6. aught and ought become ɔt: daughter = dɔtər, sought = sɔt.

7. Any other ough becomes oʊ: dough = doʊ.

8. Elsewhere, gh is simply dropped: freight = freɪt.

People usually trot out gh when they bitch about English spelling. The culprit is sound change: gh used to do nicely for the x sound (now usually represented kh when we transcribe foreign words), but the sound disappeared in everything but Scots. It usually went quietly, but sometimes, word-finally (laugh, cough, enough, rough, tough, and not much more) it was transformed to finstead.

ough is also notorious, but the usual sound (as seen in rule 7) is oʊ. Through is a notable exception.

Initial gh is sometimes used to keep the g from softening (ghetto); but generally it's a meaningless variant on g, said to be introduced by Dutch typesetters in the early days of printing. In any case it's no problem, since it's always g. This is one reason Shaw's ghoti is such a fraud: initial gh can _never_ be pronounced f.

### Unpronounceable initials

9. In initial gn, kn, mn, pt, ps, tm, pronounce the second letter only: gnostic = nɑstɪk, psycho \= saɪkoʊ, knight = naɪt.

Most of these are Greek borrowings-- Greek is much freer with initial clusters than English is-- but kn derives from Old English.

### Replacing y

10. Replace y with aɪ if it ends a one-syllable word: ply = plaɪ.

11. ey is pronounced i; ay is eɪ; and oy is oɪ: say, monkey boy = seɪ mʌnki boɪ.

12. Replace y with i if it's not adjacent to a vowel-- we'll worry later about how to pronounce the i.

Thus, system = sɪstəm but you, where the y adjoins a vowel, is ju.

### Simplification of stl

13. The t in stl is lost before a final vowel: bustle = bʌsəl", bristly = bɹɪsli.

This could perhaps be generalized; but in slow speech I leave the t in (say) coastline or Christlike. I'm also tempted to generalize to all stops, but the only instance in the sample lexicon is muscle, and it's pretty silly to have a rule that applies to a single word.

### (Af)frication before i

14. ci or ti becomes ʃ before a vowel: gracious = gɹeɪʃəs, nation = neɪʃən.

15. tu becomes tʃu before a vowel, or before a liquid (r, l) followed by a vowel: mutual = mjutʃuəl, mature = mətʃur.

16. s becomes ʃ (or ʒ if it's preceded by a vowel):

*   before o\-- passion = pæʃən, vision = vɪʒən". Note that the i is lost.
*   before ur\-- assure \= əʃuɹ; leisure = liʃər.
*   after k and before a vowel: sexual = sɛkʃuəl.

At some point English affricated a number of consonants before a i or j that preceded another vowel, including the \[j\] sound that begins ju Sometimes the j has been lost since. This process seems to be no longer productive-- compare costume, Casio. (Or is it? In quick speech I do say kɑstʃʊm.)

Rule 14 shows another reason ghoti is a fraud: ti only fricativizes when it's followed by a vowel.

### Voicing of s

17. s is voiced between two vowels (amuse, design, prison), except after a (base, parasite).

It's easy to find exception to this rule: disagree, opposite, analysis\-- there's even words where the rule applies only for verbs (abuse, house). The rule as stated has more successes than failures, and I haven't been able to find merely lexical rules that do much better. A better rule might take the language of origin into account: the voicing tends to occur in French and Latin words (resent, please, reason, miserable), but not if they're from Greek (analysis, isoceles) or more exotic languages (papoose, Osaka).

The voicing of s is so almost predictable that there are orthographic conventions (borrowed from French) to indicate that we really do want an s: double the s (cf. Moses vs. mosses), or use c instead (race vs. rase). Annoyingly, there are a few cases of unexpectedly voiced ss (dessert, dissolve).

As a corollary of this rule, the American use of \-ize for British \-ise was unnecessary, although of course it is more foolproof.

### You know me, al

18. al is pronounced ɔl before r, s, m, a dental stop, or final ll: also, already, wall, bald, although, almost.

19. alk becomes ɔk, except initially: walk \= wɔk.

I suspect this is a sound change, obscured by later borrowings like alcohol.

### Softening of velars

20. c becomes s before a front vowel, k elsewhere: cell = sɛl, acid = æsɪd, but cow = kaʊ, backer = bækəɹ, clear = kliɹ.

21. Similarly, g becomes dʒ before a front vowel, g elsewhere: gel = dʒɛl, turgid \= tərjɪd, but got = gɑt, twig = twɪg, gleam = glim.

22. If the g doesn't begin the word, and the triggering e precedes o or a, the e is lost: changeable = ceɪndʒəbəl; dungeon \= dʌndʒən (but geology \= dʒiɑləji).

23. Initial gu or final gue is pronounced g: guest = gɛst, plague = pleɪg. (Medially, it tends to be gw instead: language, anguish.)

Front vowels are i and e; note that y was changed to i by rule 12. We owe these rules to a sound change, and not even our own-- it derives from the history of French.

The last two rules allow g to be used for two sounds:

*   ga ge gi go gu can be written ga gue gui go gu
*   dʒa je ji jo ju can be written gea ge gi geo geu.

The inserted e or u are orthographic only; they make sure rule 21 applies or doesn't apply, as desired.

In French, there's a parallel with c:

*   ka ke ki ko ku can be written ca que qui co cu
*   sa se si so su can be written cea ce ci ceo ceu (but it's more usual to write ça ce ci ço çu)

but it doesn't work so well in English, since our qu is still kw. The inserted e is found in just a few words (e.g. placeable), due to compounding.

### Untangle reverse-written final liquids

24. le and re (after a consonant, and ending the word) should be rewritten əl, əɹ.

To be precise, they become syllabic consonants: the final sound in bottle is a prolonged dark l. I think this is an allophonic detail, however: if you like, just add a rule at the end to turn all instances of əɹ into syllabic r.

### Short and long vowels

OK, listen up, because these are the **two most important rules** of English spelling.

25. Vowels are pronounced long before an intervocalic consonant (rate, mete, fine, rote, cute = reɪt mit faɪn roʊt kjut).

26. They're short before two consonants (baffle, held, children, rotten, butler), or before a final consonant (pat, pet, pit, pot, but \= pæt pɛt pɪt pɑt bʌt).

English has a dozen or so vowel phonemes, and this silly alphabet we inherited from the Romans has just five vowel symbols (y is sometimes used as a vowel, but as we've seen, it pointlessly duplicates i). The five symbols can represent ten sounds, thanks to these rules.

Each vowel letter has two basic interpretations, which by convention are called **long** and **short**. (Phonetically they're _not_ distinguished by length; _tense_ and _lax_ would be more accurate. But I think the more familiar terms will be more readable, and remind readers that their old English teachers were onto something after all.)

In my transcription, **long** vowels are marked with a diaresis, since html doesn't supply a macron (eɪiaɪoɪu), and **short** vowels with a circumflex (æɛɪɑʌ). Now you can see why I chose those odd representations-- they come from the basic logic of English spelling. (Think of the diaresis as the IPA : long mark.)

Note that the names of the letters A E I O U are simply the 'long' vowels.

And where did _that_ come from?

*   The spelling of the long vowels is the fault of the Great Vowel Shift of early modern times. Middle English spoke the vowels with their 'proper' vowels, so that (say) mate would have been pronounced mɑtə.
*   The short vowels are simply laxed versions of the _original_ sounds of the long vowels. ɛ, for instance, is a lazy version of eɪ (the original sound of long e)-- closer to the muddy center of the vowel space.

The above rules work in conjunction with rule 54, which means that **doubling a consonant** changes a medial vowel from long to short: later/latter, Peter/petter, biter/bitter, hoping/hopping, cuter/cutter.

### Exceptions, but general ones

27. Final ind is aɪnd, final oss is ɔs; final og is ɔg: mind, boss, dog = maɪnd bɔs doʊg.

28. o also becomes ɔ before f and another consonant (offer = ɔfəɹ, soften = sɔfən).

29. wa is pronounced wɑ before a dental or alveolar consonant (t d n s +): want, wander, swan, Rwanda, swat, wad, wasp, and as wɔ between w and (t)ʃ: wash, squash, watch = wɔʃ skwɔʃ wɔtʃ.

29a. u is pronounced u before l, or after a labial stop (pb) and before a sibilant (sʃtʃ): adult, push, butch. (This doesn't apply if the u is long: mule.)

I don't think I ever noticed these generalizations till I started working out the rules for this page. At least some of these, such as 29a, are sound changes from Shakespeare's time.

Rules such as 6, 18, 19, 27, 28, and 51 introduce ɔ, a vowel which (as signalled by the odd diacritic in my transcription) doesn't fit well into English phonology. The fact that a velar occurs in many of the rule conditions suggests that it was originally an allophonic variant of /ɑ/ and /æ/ in this environment-- compare dog, ought, long, walk with dot, out, lot, wad. But it's now phonemic in GA, as can be seen in the minimum triad caught, cot, cat. These rules would have to be modified (and some could be eliminated) in dialects that merge ɔ and ɑ.

For some speakers, rule 29a only applies after labials, so that pull and dull don't rhyme.

### Softening of gn

30. Except before a vowel, the vowel in ign or igm lengthens, and the g is lost: alignment paradigm = əlaɪnmənt, peɪrədaɪm, but igneous = ɪgniəs.

31. The g is simply lost in eign: feign = feɪn.

### Handling of -ous

32. Except before a vowel, ous reduces to əs: jealous = dʒɛləs.

I'm ambivalent about rules that relate to a particular suffix, since arguably the pronunciation is simply a fact about the suffix in the mental lexicon. But a suffix can apply to dozens of words, so there was a large gain from including some such rules in the file.

Note the importance of order: this rule has to be ordered before silent e deletion, or it will apply to words like arouse.

### Removal of silent e

33. Remove final e: rate mike cute = reɪt maɪk kjut (unless it's the only vowel in the word, as in he).

This and rules 25 and 26 (on long and short vowels) are the guts of the English spelling system. They allow the five vowel symbols to represent ten vowel phonemes.

English orthography tends to preserve the spelling of morphemes in derived words, including their final e. The program is too stupid to handle this, since it has no way of recognizing compounds. But of course in words like safety, lovely, changeable, careful, warehouse, jukebox, placement, placeholder the e in the first morpheme should be deleted by this rule.

People pay tribute to these rules every time they make up words-- whether for marketing purposes (Nite-Lite, Cold-Eeze, Unix), slang (reefer, dweeb, doofus), a created world (hobbit, Leela, Oz, Alley Oop, Naboo, Mr. Magoo, Morlock), or for borrowings ( thuggee, kangaroo, tycoon, igloo, tepee). Words that don't fit the pattern, like Linux, can cause confusion.

### Add shortening; stir

Some vowels that are orthographically long are pronounced short, and frankly I haven't put my finger on the pattern. In the file I did add this rule:

34. Shorten a vowel that precedes a simple, final CV syllable (and is not the first syllable in the word).

This handles words like anomaly, cinema, sanity, biology, century; but it fails on other words, like patina, tuxedo, agora. Obviously the shortened vowels are all unstressed; but the idea here is to predict pronunciations from the spelling, and the spelling doesn't indicate the stress.

(We've already removed silent e, so this rule isn't triggered by words like phoneme.)

Somewhere I read that long vowels can't occur earlier than the antepenult; but obvious counterexamples are isolating or unification. I'll see if I can improve the generalization, however.

### Vowel digraphs

Besides the long/short trick, English expands its repertoire of vowel representations with digraphs. Quite a few of these are redundant, and there are lots of exceptions-- this, and not ch or ough, is the real weak point of English spelling.

35. iV (that is, i plus another vowel) becomes aɪə in the initial syllable: bias, diagram = baɪəs, daɪəgɹæm.

36. Exceptions to the following rule:

*   Final ow is pronounced oʊ: slow, rainbow, overthrow.
*   oo is pronuonced ʊ before a k: book, crook, look.
*   ei is pronuonced i after s: perceive, ceiling, seize.
*   ie is pronounced aɪ finally: dye, necktie.
*   oul becomes ʊ before a final d.

37. Make the following substitutions:

<table border=1 cellspacing=0 cellpadding=0>
	<tr>
	  <td> <cite>eau</cite>      
	  <td> <tt>oʊ</tt>      
	</tr><tr>
	  <td> <cite>ai</cite>
	  <td> <tt>eɪ</tt>
	</tr><tr>
	  <td> <cite>au, aw</cite>
	  <td> <tt>ɔ</tt>
	</tr><tr>
	  <td> <cite>ee</cite>
	  <td> <tt>i</tt>
	</tr><tr>
	  <td> <cite>ea</cite>
	  <td> <tt>i</tt>
	</tr><tr>
	  <td> <cite>ei</cite>
	  <td> <tt>eɪ</tt>
	</tr><tr>
	  <td> <cite>eo</cite>
	  <td> <tt>iə</tt>
	</tr><tr>
	  <td> <cite>eu, ew</cite>
	  <td> <tt>ju</tt>
	</tr><tr>
	  <td> <cite>ie</cite>
	  <td> <tt>i</tt>
	</tr><tr>
	  <td> <cite>iV</cite>
	  <td> <tt>iə</tt>
	</tr><tr>
	  <td> <cite>oa</cite>
	  <td> <tt>oʊ</tt>
	</tr><tr>
	  <td> <cite>oe</cite>
	  <td> <tt>oʊ</tt>
	</tr><tr>
	  <td> <cite>oo</cite>
	  <td> <tt>u</tt>
	</tr><tr>
	  <td> <cite>ou, ow</cite>
	  <td> <tt>aʊ</tt>
	</tr><tr>
	  <td> <cite>oi</cite>
	  <td> <tt>oɪ</tt>
	</tr><tr>
	  <td> <cite>ua</cite>
	  <td> <tt>juə</tt>
	</tr><tr>
	  <td> <cite>ue</cite>
	  <td> <tt>u</tt>
	</tr><tr>
	  <td> <cite>ui</cite>
	  <td> <tt>u</tt>
	</tr>
	</table>

Again, the program is not smart enough to recognize when the digraph spans a morpheme boundary, and thus should be treated as two separate vowels: goer = goʊəɹ, coaxial = koʊæksiəl.

Annoyingly, some of these digraphs have at least two values: cf. wool, fool; mead, dread; fief, friend; reign, seize; ground, group. The values in the table are those that occur most often. (The alternatives are generally just a step or two apart phonetically, e.g. u/ù, i/ɛ, eɪ/i.)

For ease of exposition I've put the final ie rule here, but it really goes before rule 14 (affrication); otherwise terrible things happen to words like untie.

### Those pesky final syllabics

38. Any vowel reduces to ə before final l: battle, final, hovel, evil, symbol.

39. Any short vowel reducts to ə before a final n: human, frighten, cabin, button.

These rules don't apply to monosyllables (pal, can), nor to vowels that have already been assigned a particular value by an earlier rule (e.g. meal to mil by rule 37).

These rules could probably be refined; they don't apply to stressed finals, but again, the orthography doesn't indicate stress.

You can take əl as a phonemic representation, or add a rule at the end to replace it with vocalic l. Ditto for ən.

### Suffix simplifications

40. The following suffixes are reduced as follows:

\-able, -ible

əbəl

\-lion

ljən

\-nion

njən

Again, we really shouldn't have 'rules' for single lexical entries. But these suffixes are common, so the rule has a large yield.

### Unpronounceable finals

41. A final b or n is not pronounced if preceded by an m: damn bomb = dæm bɑm.

### Final vowel coloration

42. Pronounce any remaining final vowel as follows:

\-a

ə

\-i

i

\-o

oʊ

\-u

u

A final vowel is usually the mark of a foreign word, which is why final vowels tend to have the 'continental' values: sushi, cello, haiku. Earlier borrowings were nativized, meaning that final vowels had to be written as diphthongs (e.g. Munsee, Hindoo).

Since final \-e is already in use, we used to mark one that was supposed to be pronounced (Chloi \= kloʊi), or, if we were borrowing from French, we retained the accent (café = kæfeɪ). But English seems to be so allergic to diacritics that these helpful conventions have largely been lost.

### Vowels before r

r is hell on English vowels; it tends to color the vowels, and in many dialects, disappear. In GA there are 12 monophthongal vowels, but only 6 can appear before ɹ\-- eɪ i ɑ oʊ ɔ u\-- plus əɹ, which is really just a prolonged vocalic r.

43. An aʊ, ɑ, or ɔ resulting from the previous rules changes to oʊ before an ɹ: course = koʊɹs, for = foʊɹ.

44. war is pronounced woʊɹ, except before a vowel: warlock, war, dwarf = woʊɹlɑk, woʊr, dwoʊrf; and wor is pronounced wəɹ: word, worst, worry.

45. ɛ or æ before a double r (and ɛ before ri) become eɪ: terror, marry, merit = teɪrər, meɪri, meɪrɪt.

46. æ before any other r becomes ɑ: mark, star \= mɑrk, stɑr.

47. ɛ, ɪ, ʌ before r are reduced to schwa: perk, fir, fur = pəɹk, fər, fər.

Thanks to the infamous rule 45, I pronounce Mary, merry, marry the same. If you left this rule out, it would probably correctly predict the pronounciation of Easterners and Britons who distinguish them.

### The velar nasal ng

The careful reader may wonder why ng was not handled earlier, with the other consonantal digraphs. The reason is that orthographically, it acts as a double consonant-- e.g. singer has a short not a long **i**. But now it's time to handle it.

For lack of an eng, I represent the velar nasal as ŋ; don't confuse it with a palatalized nj.

48. ng becomes ŋg before a liquid (ɹ, l) or semivowel (j, w): angry, England, singular, anguish = eɪŋgɹi, ɪŋglænd, sɪŋgjulər, eɪŋgwɪʃ.

49. ng becomes ŋ finally, or before another consonant: hung = hʌŋ, length = leɪŋθ.

50. n becomes ŋ before a velar stop (k, g): anger = eɪŋgəɹ, think = θɪŋk.

51. ɑ becomes ɔ, and æ becomes eɪ before ŋ: song = sɔŋ; hang = heɪŋ.

Note that rule 50 doesn't apply to words like hung, because rule 49 already removed the g in those words.

50 is arguably merely allophonic, but since it's completely consistent I treated it as a spelling rule. You could certainly say that a word like ungrateful 'really' has an underlying /ng/, because it's composed of un plus grateful; then this, as in most languages, will get pronounced ŋg. But if you go that route, you can't actually show that English allows /ŋg/ as well as /ng/-- how do we know that wrong isn't actually /rɔng/, modified by the allophonic rule? The important thing is not to pretend that we have a contrast of /ng/ and /ŋg/.

### Voicing of s

52. s is voiced finally, after a voiced oral stop: dogs = dɔgz.

53. It's also voiced before final m: prism = pɹɪzm.

The first of these rules is really morphophonemic: the plural, possessive, and 3p singular inflections of English are spelled s even when, by assimilation, they're pronounced z. This rule is not phonological, as can be seen by a word like chance = tʃæns; compare fans = fænz.

### Double consonants

54. A double consonant is pronounced singly: dinner, buzzard, hassle = dɪnəɹ, bʌzərd, hæsəl.

55. A t disappears before tʃ, and a d before dʒ: batch = bætʃ, judge = dʒʌj.

56. An s disappears before ʃ: pressure = pɹɛʃr.

Rule 54 works hand in hand with [rule 25](#25): a consonant is doubled to show that the preceding vowel is short: redder = ɹɛdər (compare red, where the d doesn't need to be doubled because a vowel preceding a final consonant is already short).

Rule 55 is something of a corollary: to 'double' tʃ, we write tch rather than chch; and to double a dʒ, we write dg rather than jj or gg.

Rule 56 goes with [rule 16](#16), which changed s to ʃ before some instances of u.

### Almost but not quite regular


In the rule list there's **almost** a rule that changes o to ʌ before certain fricatives or nasals. Here's a list of affected words, as well as counterexamples:

<table border=1 cellspacing=0 cellpadding=0>
	 <tr>
	  <td> <tt>_v</tt>   
	  <td> <cite>above, cover, dove, glove, govern, hovel, hover, love, oven, shovel,
	  of</cite>
	  <td> <cite>clover, prove, drover, jovial, move, novel, over, poverty,
	  proverb, province, sovereign, stove, bovine</cite>
	</tr><tr>
	  <td> <tt>_l</tt>
	  <td> <cite>color</cite>
	  <td> <cite>apology, polo</cite>
	</tr><tr>
	  <td> <tt>_θ</tt>
	  <td> <cite>other, another, mother, brother, nothing</cite>
	  <td> <cite>both, bother, broth, brothl, cloth, clothes, moth</cite>
	</tr><tr>
	  <td> <tt>_n</tt>
	  <td> <cite>onion, none, money, monk, monkey, month, wonder, front, son,
	  sponge, honey, Monday, one</cite>
	  <td> <cite>alone, bone, honest, honor, tonight, pond, beyond, conk</cite>
	</tr><tr>
	  <td> <tt>_m</tt>
	  <td> <cite>come, become, from, some, stomach</cite>
	  <td> <cite>bomb, comb, dome, home, gnome, Mom, whom, womb</cite>
	</tr>
	</table>

Most of these turn out to be due to an orthographic or even a calligraphic rule: medieval English scribes wrote o instead of u before m, n, v, apparently because in the medieval hand, the verticals of the u ran confusingly together with those of the following consonant.

So what's irregular?
--------------------

The biggest source of errors are those that I considered **near-misses**: instances where the rules get the length of a vowel wrong, or don't predict a reduction to schwa, or don't predict a voiced s.

The first two of these are **a feature not a bug**, since they make word roots recognizable, despite predictable differences in pronunciation. For instance, the root pedant is spelled identically in pedant (pɛdənt) and pedantic (pədæntɪk)). This underlines the relationship between the two words, despite the fact that neither root vowel is pronounced the same. Similarly, sanity has a short a (sænɪti), although a vowel preceding a single consonant is normally long; this is an 'error', but it keeps the same spelling of the root as in sane.

Putting these near-misses aside, my program gets 791 words wrong in a 5180-word sample vocabulary.

Many of these are really stupidities of the program, not the language. There are:

*   188 simple variations of other errors-- e.g. since busy is wrongly predicted to have a ju, so is business
*   52 borrowings using foreign spelling conventions (e.g. aficionado, bourgeois, cello, stein). Borrowings are common enough in English that writers can learn the patterns for each source language.
*   18 instances of final \-ed taken as ɛd
*   45 words (mostly Greek) where ch = k not tʃ
*   45 silent e's not recognized as such due to compounding
*   20 over-enthusiastic vowel reductions (usually due to stress falling where, statistically, it doesn't occur much: amen, violin; or to vowels that unexpectedly don't turn to schwa before r: mirror, sergeant).
*   6 instances of consonant combinations taken as single sounds despite crossing a morpheme boundary (e.g. dishonor, shepherd)

That leaves about 420 words wrong, less than 10%; the major categories are as follows:

*   195 misinterpretations of diphthongs; some of these are genuine ambiguities in English spelling (cf. dead, mead, real; die, sieve, science, fief); others are due to insufficient analysis (e.g. poet is mispredicted simply because I didn't provide a rule for oe\-- it wasn't worth it, it occurred too rarely in the lexicon).
*   37 examples of the o to ʌ change [discussed above](#almost).
*   26 indefensible vowel spellings (e.g. pretty, women, resin, English, lose, swamp, water, bury, lawyer).
*   17 consonant clusters not simplified enough (e.g. half, folks, listen, mortgage, raspberry).
*   17 instances of an unexpected (or mispredicted) ɔ; e.g. cloth, frost, chocolate.
*   18 instances of final \-y being aɪ rather than i .
*   13 annoying cases where g before a front vowel is hard (e.g. get, give); there are also 4 cases where gg + front vowel was taken incorrectly as gdʒ\-- which it should be, dammit (suggest) but often isn't (stagger).
*   8 instances of an unexpected ʊ; e.g. put, wolf, woman. (These all begin with labials-- these may be related to rule 29a.)
*   10 unexpected (af)frications (e.g. educate, ocean, righteous, sure); there's also an instance of an unexpected lack of frication (absurd)
*   8 more instances of er becoming eɪɹ (besides those noted in the rules-- e.g. era, there, herald, very)
*   6 instances of vowels unexpectedly dropping (e.g. bachelor, vegetable, Wednesday)

Generating spellings from pronunciation
---------------------------------------

Can you **reverse** these rules to get instructions on how to spell a word given its pronunciation? Not really, since there are too many alternative spellings. However, the following table can be taken as a first approximation. For each GA phoneme, I list the spellings referred to in the rules above. Caveats:

*   Remember [the long/short vowel rules](#25) (25,26).
    *   To ensure a short pronunciation, double the following consonant.
    *   To ensure a long pronunciation:
        *   at the end of a word, add a silent e
        *   elsewhere in the word, use a diphthong instead.
*   Remember the softening of velars; see [rules 20-23](#20) for a discussion of how to spell s/k/g/j before various vowels.
*   Parenthesized characters represent the environment where you can use a spelling. Examples:
    *   under s, (V)ss(V) means that you can spell it ss between two vowels
    *   under eɪ, a(ng) means that you can spell it a before ng.
*   \# represents the end or beginning of a word:
    *   i# under aɪ means that this spelling occurs word-finally.
*   ks (or intervocalic gz) can be written x.
*   It's preferable to spell a word the same way across all morphological changes, even if it means slight violations of the rules (e.g. 'silent final e' in the middle of a word).
*   Likewise: write reduced vowels with the full vowel in a morphologically related word. E.g. the second vowel in parent is e because we have a full ɛ in parental.

<table border=1 cellspacing=0 cellpadding=0>
	<tr style='background-color:#C0C0C0'>
	  <td><b>Phoneme</b></td>
	  <td><b>Spellings</b></td>
	  <td><b>Phoneme</b></td>
	  <td><b>Spellings</b></td>
	</tr><tr>
	  <td> <tt>eɪ</tt></td>
	  <td> <cite>a, ay, ai, ei, e(r), a(ng)</cite></td>
	  <td> <tt>p</tt></td>
	  <td> <cite>p</cite></td>
	</tr><tr>
	  <td> <tt>æ</span></td>
	  <td> <cite>a</cite></td>
	  <td> <tt>b</cite></td>
	  <td> <cite>b</cite></td>
	</tr><tr>
	  <td> <tt>i</tt></td>
	  <td> <cite>e, ee, ea, ey, (c)ei, e(V), i#, y#</cite></td>
	  <td> <tt>t</tt></td>
	  <td> <cite>t</cite></td>
	</tr><tr>
	  <td> <tt>ɛ</tt></td>
	  <td> <cite>e, ea</cite></td>
	  <td> <tt>d</tt></td>
	  <td> <cite>d</cite></td>
	</tr><tr>
	  <td> <tt>aɪ</tt></td>
	  <td> <cite>i, y ,ie, igh, ig(n), i(V)</cite></td>
	  <td> <tt>g</tt></td>
	  <td> <cite>g, gh(i/e/y)</cite></td>
	</tr><tr>
	  <td> <tt>ɪ</tt></td>
	  <td> <cite>i, y</cite></td>
	  <td> <tt>k</tt></td>
	  <td> <cite>k, c(a/o/u), q(u), ck#</cite></td>
	</tr><tr>
	  <td> <tt>oʊ</tt></td>
	  <td> <cite>o, oa, oe, ough, o#, ow#, eau</cite></td>
	  <td> <tt>m</tt></td>
	  <td> <cite>m</cite></td>
	</tr><tr>
	  <td> <tt>ɑ</tt></td>
	  <td> <cite>o, (w)a(n/s/t/d), a(r)</cite></td>
	  <td> <tt>n</tt></td>
	  <td> <cite>n</cite></td>
	</tr><tr>
	  <td> <tt>ju</tt></td>
	  <td> <cite>u, eu, ew</cite></td>
	  <td> <tt>ŋ</tt></td>
	  <td> <cite>ng, n(k,g)</cite></td>
	</tr><tr>
	  <td> <tt>ʌ</tt></td>
	  <td> <cite>u</cite></td>
	  <td> <tt>f</tt></td>
	  <td> <cite>f, ph</cite></td>
	</tr><tr>
	  <td colspan=2> 
	  <td> <tt>v</tt></td>
	  <td> <cite>v</cite></td>
	</tr><tr>
	  <td> <tt>u</tt></td>
	  <td> <cite>oo, ue, ui, u#</cite></td>
	  <td> <tt>θ</tt></td>
	  <td> <cite>th</cite></td>
	</tr><tr>
	  <td> <tt>ɔ</tt></td>
	  <td> <cite>au, aw, augh(t), a(l), (w)a(sh,ch), o(ss#, g#, fC, ng)</cite></td>
	  <td> <tt>θ</tt></td>
	  <td> <cite>th</cite></td>
	</tr><tr>
	  <td> <tt>ʊ</tt></td>
	  <td> <cite>oo, u</cite></td>
	  <td> <tt>s</tt></td>
	  <td> <cite>s, (V)ss(V), c(i/e/y), ce(a/o/u)</cite></td>
	</tr><tr>
	  <td> <tt>ə</tt></td>
	  <td> <cite>V, a#</cite></td>
	  <td> <tt>z</tt></td>
	  <td> <cite>z, (V)s(V)</cite></td>
	</tr><tr>
	  <td colspan=2> 
	  <td> <tt>ʃ</tt></td>
	  <td> <cite>sh, ci(V), ti(V); <a href="#16">rule 16</a> situations: s, ss</cite></td>
	</tr><tr>
	  <td> <tt>aʊ</tt></td>
	  <td> <cite>ou, ow</cite></td>
	  <td> <tt>ʃ</tt></td>
	  <td> <cite>s, zh</cite></td>
	</tr><tr>
	  <td> <tt>oɪ</tt></td>
	  <td> <cite>oy, oi</cite></td>
	  <td> <tt>tʃ</tt></td>
	  <td> <cite>ch, (doubled) tch, t(u)</cite></td>
	</tr><tr>
	  <td> <tt></tt></td>
	  <td> <cite></cite></td>
	  <td> <tt>dʒ</tt></td>
	  <td> <cite>j, (doubled) dg, g(i/e/y), ge(a/o/u</cite></td>
	</tr><tr>
	  <td> <tt>j</tt></td>
	  <td> <cite>y;</cite> <tt>ju</tt> <cite>can be u</cite></td>
	  <td> <tt>ɹ</tt></td>
	  <td> <cite>r, #wr, rh</cite></td>
	</tr><tr>
	  <td> <tt>w</tt></td>
	  <td> <cite>w, #wh, u(V)</cite></td>
	  <td> <tt>;l</tt></td>
	  <td> <cite>l</cite></td>
	</tr><tr>
	  <td colspan=2> 
	  <td> <tt>h</tt></td>
	  <td> <cite>h</cite></td>
	</tr><tr>
	  <td> <tt>əɹ</tt></td>
	  <td> <cite>Vr, re#</cite></td>
	  <td colspan=2 rowspan=3> </td>
	</tr><tr>
	  <td> <tt>ən</tt></td>
	  <td> <cite>Vn</cite></td>
	</tr><tr>
	  <td> <tt>əl</tt></td>
	  <td> <cite>Vl, le#</cite></td>
	</tr>
	</table>
	

Spelling reform by regularization
---------------------------------

You could use the above table as the basis for a really useful and minimal spelling reform.

For instance, here's Percy Bysshe Shelley's _Ozymandias_ in regularized spelling. To minimize the barbarity, I exempt one- and two-letter words from reform.

> I met a traveller from an anteke land hu sed: Tue vast and trunkless legs of stone stand in the desert. Near them, on the sand, haff sunk, a shattered visage lies, huse frown, and wrinkled lip, and sneer of cold cummand tell that its sculptor well those passions read, which yet remain, stamped on these lifeless things-- the hand that mocked them, and the hart that fed. And on the peddestal these words are carved: 'My name is Ozzymandias, king of kings! Look on my works, ye mighty, and despair!' Nuthing beside remains. Round the decay of that colossal wreck, boundless and bare, the lone and levvel sands stretch far away.

Or of course we could just hang it up and use [Chinese-style syllabograms](yingzi/yingzi.htm) instead.

So how horrible is English spelling really?
-------------------------------------------

I doubt that this page will convince anyone that English spelling is a _good_ system. There's too many oddities.

*   Vowel combinations are a mess-- often the best you can do is give the two most likely sounds (realm, reap), and even those will be overruled in the fairly frequent cases where two vowels really adjoin (reality).
*   There's too many quirky rules that derive from odd sound changes. We may not be able to get away from the Romance c/g softening or the Great Vowel Shift, but does our spelling need to preserve old forms of feign or walk?
*   There was a period when busybodies did their best to make English look like Latin. This was bad enough when we distorted perfectly good French loans like dette into debt, but we're also stuck with false etymologies like island (in place of the older, and regular, iland).
*   And the modern custom of borrowing instead of adapting spellings, though nice for etymology, plays havoc with the orthography, especially as we start to borrow from more exotic languages and forget where they're from. I've heard well-meaning idiots pronouncing a Russian z as ts, as if it were German; and people like to pronounce words like Sarajevo as if they were Spanish. And why spell gyros as if it were classical instead of modern Greek (inviting the pronunciation dʒaɪɹoʊz in place of jiɹoʊs)?
*   While we're at it, could we please fix the word ginkgo, which is not only difficult and irregular, but doesn't reflect **any** proper Japanese word? The Japanese characters (銀杏) can be read two ways: as _icho:_, they refer to the tree; as _ginnan_, to the fruit. The second character can be read _kyo:_ in other words, so someone misread the combination as _ginkyo:_, and someone else mangled this into _ginkgo_.

What I hope to have shown, however, is that beneath all the pitfalls, there's a rather clever and fairly regular mechanism at work, and one which still gets the vast majority of words pretty much correct. It's not to modern tastes, but by no means as broken as people think.

* * *
