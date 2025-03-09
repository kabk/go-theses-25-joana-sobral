let footnoteTexts_Source = ["It’s not what this text is about, but there’s a lot to be said about the association of femininity to “service” devices (machines with a purpose and presence similar to that of a server or a personal assistant).",
                            "Sallés, Lluís. “La Alteridad y la Bestia.” Identidad Personal, Semester 5 of Bachelor's in Design and Innovation, Elisava. 8 Jan. 2024. Elisava, Barcelona.",
                            "Ovid. Metamorphoses. Edited by R. J. Tarrant. Oxford University Press, 2004. Oxford Classical Texts.",
                            "Werewolf of London. Directed by Stuart Walker, performance by Henry Hull, Universal Pictures, 1935.",
                            "“Metamorphoses.” Encyclopædia Britannica, Encyclopædia Britannica, inc., 6 Dec. 2024.",
                            "Ovid. Metamorphoses. Edited by R. J. Tarrant. Oxford University Press, 2004. Oxford Classical Texts.",
                            "The term occult refers to the world of the supernatural, mystical, and magical. A very interesting approach to the clerical profession.",
                            "Summers, Montague. The Werewolf in Lore and Legend. Kegan Paul, Trench, Trubner & Co, 2003.",
                            "Ejjbair, Eddie. “The Werewolf and Civilization’s Discontents.” Medium, Medium, 29 Aug. 2022.",
                            "Binga, Tim. “New Case of Lycanthropy from an Accused Man-Beast.” Center for Inquiry, 30 Apr. 2019.",
                            "Spelling varies throughout documentation.",
                            "“Peter Stumpp: The Werewolf of Bedburg.” The Dark Histories Podcast.",
                            "Baille, Nathan. “Monstrous Lessons: Peter Stumpp, the Werewolf of Bedburg.” University of Saskatchewan Undergraduate Research Journal, vol. 9, no. 2, 2024. Research Gate.",
                            "Mayer, Lukas. Execution of Peter Stubbe in 1589. Wikipedia.",
                            "Summers, Montague. The History Of Witchcraft And Demonology. Edited by C K Ogden, MA. Kegan Paul, Trench, Trubner & Co, 1926.",
                            "Summers, Montague. The Werewolf in Lore and Legend. Kegan Paul, Trench, Trubner & Co, 2003.",
                            "Baille, Nathan. “Monstrous Lessons: Peter Stumpp, the Werewolf of Bedburg.” University of Saskatchewan Undergraduate Research Journal, vol. 9, no. 2, 2024. Research Gate.",
                            "Freud, Sigmund. “Civilization and its Discontents”. The Standard Edition of the Complete Psychological Works of Sigmund Freud, Volume XXI. Edited by James Strachey, 1930.",
                            "Land, Nick. “Spirit and Teeth”. Of Derrida, Heidegger, and Spirit. Edited by David Wood. NorthWestern University Press, 1993.",
                            "Ibid.",
                            "Harraway, Donna. The Cyborg Manifesto. Socialist Review, 1985.",
                            "Ibid.",
                            "Koebler, Jason. “I Went to the Premiere of the First Commercially Streaming AI-Generated Movies.” 404 Media, 404 Media, 11 Dec. 2024.",
                            "“THE SLUG | SHORT FILM | TCL STUDIOS” YouTube, uploaded by TCLtvplus, 22 Nov. 2024.",
                            "Koebler, Jason. “I Went to the Premiere of the First Commercially Streaming AI-Generated Movies.” 404 Media, 404 Media, 11 Dec. 2024.",
                            "Ibid.",
                            "“Youtube.” Encyclopædia Britannica, Encyclopædia Britannica, inc., 3 Feb. 2025.",
                            "Otachi, Elsier. “YouTube Automation Examples: 12 Ideas to Try in 2025 | Fiverr.” Fiverr Guides, 1 Nov. 2024.",
                            "“TCL | Company Overview & News.” Forbes, Forbes Magazine.",
                            "“Cybernetics.” Encyclopædia Britannica, Encyclopædia Britannica, inc., 25 Jan. 2025.",
                            "Wiener, Norbert. The Human Use of Human Beings: Cybernetics and Society. Da Capo Press, 1954.",
                            "Ibid.",
                            "Srivastava, Varsha. “Could A Curse Turn You into a Wolf?” Medium, Medium, 5 Jan. 2025.",
                            "Ejjbair, Eddie. “The Werewolf and Civilization’s Discontents.” Medium, Medium, 29 Aug. 2022.",
                            "Katz, Gwen C. “The Many Metaphors of Lycanthropy.” Medium, Medium, 22 May 2023.",
                            "Ginger Snaps. Directed by John Fawcett, performances by Emily Perkins and Katharine Isabelle, Oddbod Productions, 2000.",
                            "“Shakira - Loba (Official HD Video)” YouTube, uploaded by Shakira, 14 Nov. 2009.",
                            "I could spend another 5000 words talking about the toxic love triangle between the werewolf, catholic values, and womanhood. But for you, my dearest reader, I’ll keep it short. As the werewolf essentially represents sin, it’s only logical that it’s associated with (female) sexuality. In Loba (Shewolf), Shakira talks about being unsatisfied in a relationship, turning into a werewolf as an analogy for seeking out sex. She speaks of sexual desire and acting on it as a natural and powerful decision, but in the videoclip it does feel strange to watch her dance in a cage wearing a tiny nude-illusion outfit. When does werewolfhood make someone’s sexuality powerful, and when does it make it sub-human? By comparing ourselves to animals, are we undermining our own humanity, promoting an objectified view? Does the Shewolf in question even have control over when and how she's objectified? At the end of the day, by simply existing each Shewolf ends up deciding for herself how she’ll deal with a system that demonizes her, that might burn her at the stake. Maybe she’ll seek revenge, maybe she’ll hide, or maybe she’ll find a pack and a safe space to transform. Maybe she’ll decide to enjoy being a wolf.",
                            "Theissen, Günter. “The Proper Place of Hopeful Monsters in Evolutionary Biology.” PubMed, 2006.",
                            "In evolutionary biology, mutations in species happen sporadically. The process of evolution happens when enough of these mutations have occurred to alter a species significantly. Within this field, the term “monster” refers to an individual being that was born significantly deformed, or mutated. As the quoted study states, not much evolutionary relevance is accredited to such beings, although there is evidence suggesting that these more “concentrated” propellers of evolution played a key role in the genetic development of novel characteristics.",
                            "Chang, Spencer. “We’re All (Folk) Programmers.” Reboot, Reboot, 1 July 2024.",
                            "Foulston, Marie. “Party in a Shared Google Doc.” OneZero, Medium. 13 May 2020.",
                            "Foulston, Marie. “Kitchen, Party in a Shared Google Doc.” Google Sheets, 1 May 2020."];

let allInTextFootnotes = document.getElementsByClassName("intext_footnote");


for(i=0;i<allInTextFootnotes.length;i++){
  let footnoteNumber = allInTextFootnotes[i].innerText;
  let footnoteIndex = i;
  let displayingFullFootnote = false;

  allInTextFootnotes[i].addEventListener("click", () => {
    if (!displayingFullFootnote) {
      allInTextFootnotes[footnoteIndex].innerText = footnoteTexts_Source[footnoteIndex];
      displayingFullFootnote = true;
    } else {
      allInTextFootnotes[footnoteIndex].innerText = footnoteNumber;
      displayingFullFootnote = false;
    }
});
}
