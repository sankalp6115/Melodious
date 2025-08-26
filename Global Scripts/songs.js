const songs = [
  {
    "id": 1,
    "title": "Aankhein Khuli",
    "artist": [
      "Jatin-Lalit",
      "Lata Mangeshkar",
      "Udit Narayan",
      "Udbhav",
      "Manohar Shetty",
      "Ishaan",
      "Shweta Pandit",
      "Sonali Bhatawdekar",
      "Pritha Mazumdar",
      "Anand Bakshi"
    ],
    "album": "Mohabbatein",
    "genre": "Bollywood",
    "year": 2000,
    "length": 422,
    "albumArt": "http://localhost:3000/music/AlbumArt/Jatin-Lalit, Lata Mangeshkar, Udit Narayan, Udbhav, Manohar Shetty, Ishaan, Shweta Pandit, Sonali Bhatawdekar, Pritha Mazumdar, Anand Bakshi - Aankhein Khuli.jpg",
    "file": "http://localhost:3000/music/Jatin-Lalit, Lata Mangeshkar, Udit Narayan, Udbhav, Manohar Shetty, Ishaan, Shweta Pandit, Sonali Bhatawdekar, Pritha Mazumdar, Anand Bakshi - Aankhein Khuli.mp3",
    "rating": 5
  },
  {
    "id": 2,
    "title": "Aaoge Tum Kabhi",
    "artist": [
      "The Local Train"
    ],
    "album": "Aalas Ka Pedh",
    "genre": "Indian Indie",
    "year": 2015,
    "length": 313,
    "albumArt": "http://localhost:3000/music/AlbumArt/The Local Train - Aaoge Tum Kabhi.jpg",
    "file": "http://localhost:3000/music/The Local Train - Aaoge Tum Kabhi.mp3",
    "rating": 5
  },
  {
    "id": 3,
    "title": "Aap Ki Nazron Ne Samjha",
    "artist": [
      "Sanam"
    ],
    "album": "Aap Ki Nazron Ne Samjha - Sanam",
    "genre": "Hindi Pop",
    "year": 2014,
    "length": 186,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sanam - Aap Ki Nazron Ne Samjha.jpg",
    "file": "http://localhost:3000/music/Sanam - Aap Ki Nazron Ne Samjha.mp3",
    "rating": 5
  },
  {
    "id": 4,
    "title": "Ae Dil Hai Mushkil Title Track",
    "artist": [
      "Pritam",
      "Arijit Singh"
    ],
    "album": "Ae Dil Hai Mushkil (Original Motion Picture Soundtrack) [Deluxe Edition]",
    "genre": "Bollywood",
    "year": 2016,
    "length": 269,
    "albumArt": "http://localhost:3000/music/AlbumArt/Pritam, Arijit Singh - Ae Dil Hai Mushkil Title Track.jpg",
    "file": "http://localhost:3000/music/Pritam, Arijit Singh - Ae Dil Hai Mushkil Title Track.mp3",
    "rating": 5
  },
  {
    "id": 5,
    "title": "Agar Tum Saath Ho",
    "artist": [
      "Alka Yagnik",
      "Arijit Singh"
    ],
    "album": "Tamasha",
    "genre": "Bollywood",
    "year": 2015,
    "length": 341,
    "albumArt": "http://localhost:3000/music/AlbumArt/Alka Yagnik, Arijit Singh - Agar Tum Saath Ho.jpg",
    "file": "http://localhost:3000/music/Alka Yagnik, Arijit Singh - Agar Tum Saath Ho.mp3",
    "rating": 5
  },
  {
    "id": 6,
    "title": "Akhiyaan Gulaab (From \"Teri Baaton Mein Aisa Uljha Jiya\")",
    "artist": [
      "Mitraz"
    ],
    "album": "Akhiyaan Gulaab (From \"Teri Baaton Mein Aisa Uljha Jiya\")",
    "genre": "Indian Indie",
    "year": 2024,
    "length": 171,
    "albumArt": "http://localhost:3000/music/AlbumArt/Mitraz - Akhiyaan Gulaab (From 'Teri Baaton Mein Aisa Uljha Jiya').jpg",
    "file": "http://localhost:3000/music/Mitraz - Akhiyaan Gulaab (From 'Teri Baaton Mein Aisa Uljha Jiya').mp3",
    "rating": 5
  },
  {
    "id": 7,
    "title": "Alag Aasmaan",
    "artist": [
      "Anuv Jain"
    ],
    "album": "Alag Aasmaan",
    "genre": "Indian Indie",
    "year": 2020,
    "length": 212,
    "albumArt": "http://localhost:3000/music/AlbumArt/Anuv Jain - Alag Aasmaan.jpg",
    "file": "http://localhost:3000/music/Anuv Jain - Alag Aasmaan.mp3",
    "rating": 5
  },
  {
    "id": 8,
    "title": "Apna Bana Le",
    "artist": [
      "Sachin-Jigar",
      "Arijit Singh",
      "Amitabh Bhattacharya"
    ],
    "album": "The Arijit Singh Collection",
    "genre": "Gujarati Pop",
    "year": 2023,
    "length": 261,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya - Apna Bana Le.jpg",
    "file": "http://localhost:3000/music/Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya - Apna Bana Le.mp3",
    "rating": 5
  },
  {
    "id": 9,
    "title": "Arjan Vailly",
    "artist": [
      "Manan Bhardwaj",
      "Bhupinder Babbal"
    ],
    "album": "ANIMAL",
    "genre": "Bhajan",
    "year": 2023,
    "length": 182,
    "albumArt": "http://localhost:3000/music/AlbumArt/Manan Bhardwaj, Bhupinder Babbal - Arjan Vailly.jpg",
    "file": "http://localhost:3000/music/Manan Bhardwaj, Bhupinder Babbal - Arjan Vailly.mp3",
    "rating": 5
  },
  {
    "id": 10,
    "title": "Astronaut In The Ocean",
    "artist": [
      "Masked Wolf"
    ],
    "album": "Astronaut In The Ocean",
    "genre": "",
    "year": 2021,
    "length": 132,
    "albumArt": "http://localhost:3000/music/AlbumArt/Masked Wolf - Astronaut In The Ocean.jpg",
    "file": "http://localhost:3000/music/Masked Wolf - Astronaut In The Ocean.mp3",
    "rating": 5
  },
  {
    "id": 11,
    "title": "Baarish Ban Jaana",
    "artist": [
      "Payal Dev",
      "Stebin Ben",
      "Kunaal Vermaa"
    ],
    "album": "Baarish Ban Jaana",
    "genre": "Bhajan",
    "year": 2021,
    "length": 200,
    "albumArt": "http://localhost:3000/music/AlbumArt/Payal Dev, Stebin Ben, Kunaal Vermaa - Baarish Ban Jaana.jpg",
    "file": "http://localhost:3000/music/Payal Dev, Stebin Ben, Kunaal Vermaa - Baarish Ban Jaana.mp3",
    "rating": 5
  },
  {
    "id": 12,
    "title": "Baatein Ye Kabhi Na (From \"Khamoshiyan\") - Male",
    "artist": [
      "Jeet Gannguli",
      "Arijit Singh"
    ],
    "album": "Musical Bond: Jeet Gannguli & Arijit Singh",
    "genre": "Bangla Pop",
    "year": 2015,
    "length": 289,
    "albumArt": "http://localhost:3000/music/AlbumArt/Jeet Gannguli, Arijit Singh - Baatein Ye Kabhi Na (From 'Khamoshiyan') - Male.jpg",
    "file": "http://localhost:3000/music/Jeet Gannguli, Arijit Singh - Baatein Ye Kabhi Na (From 'Khamoshiyan') - Male.mp3",
    "rating": 5
  },
  {
    "id": 13,
    "title": "Balenciaga",
    "artist": [
      "T3NZU"
    ],
    "album": "Balenciaga",
    "genre": "",
    "year": 2021,
    "length": 168,
    "albumArt": "http://localhost:3000/music/AlbumArt/T3NZU - Balenciaga.jpg",
    "file": "http://localhost:3000/music/T3NZU - Balenciaga.mp3",
    "rating": 5
  },
  {
    "id": 14,
    "title": "Banjaara (From \"Ek Villain\")",
    "artist": [
      "Mohammed Irfan"
    ],
    "album": "Best Of Shraddha Kapoor",
    "genre": "Hindi Pop",
    "year": 2017,
    "length": 336,
    "albumArt": "http://localhost:3000/music/AlbumArt/Mohammed Irfan - Banjaara (From 'Ek Villain').jpg",
    "file": "http://localhost:3000/music/Mohammed Irfan - Banjaara (From 'Ek Villain').mp3",
    "rating": 5
  },
  {
    "id": 15,
    "title": "Bekhayali (From \"Kabir Singh\")",
    "artist": [
      "Sachet Tandon",
      "Sachet-Parampara"
    ],
    "album": "Bekhayali (From \"Kabir Singh\")",
    "genre": "Bhajan",
    "year": 2019,
    "length": 371,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sachet Tandon, Sachet-Parampara - Bekhayali (From 'Kabir Singh').jpg",
    "file": "http://localhost:3000/music/Sachet Tandon, Sachet-Parampara - Bekhayali (From 'Kabir Singh').mp3",
    "rating": 5
  },
  {
    "id": 16,
    "title": "Believer",
    "artist": [
      "Imagine Dragons"
    ],
    "album": "Evolve",
    "genre": "",
    "year": 2017,
    "length": 204,
    "albumArt": "http://localhost:3000/music/AlbumArt/Imagine Dragons - Believer.jpg",
    "file": "http://localhost:3000/music/Imagine Dragons - Believer.mp3",
    "rating": 5
  },
  {
    "id": 17,
    "title": "Bhula Dena",
    "artist": [
      "Mustafa Zahid"
    ],
    "album": "Aashiqui 2",
    "genre": "Bollywood",
    "year": 2013,
    "length": 240,
    "albumArt": "http://localhost:3000/music/AlbumArt/Mustafa Zahid - Bhula Dena.jpg",
    "file": "http://localhost:3000/music/Mustafa Zahid - Bhula Dena.mp3",
    "rating": 5
  },
  {
    "id": 18,
    "title": "Blinding Lights",
    "artist": [
      "The Weeknd"
    ],
    "album": "After Hours",
    "genre": "",
    "year": 2020,
    "length": 201,
    "albumArt": "http://localhost:3000/music/AlbumArt/The Weeknd - Blinding Lights.jpg",
    "file": "http://localhost:3000/music/The Weeknd - Blinding Lights.mp3",
    "rating": 5
  },
  {
    "id": 19,
    "title": "Bloodline (with Jelly Roll)",
    "artist": [
      "Alex Warren",
      "Jelly Roll"
    ],
    "album": "Bloodline (with Jelly Roll)",
    "genre": "",
    "year": 2025,
    "length": 182,
    "albumArt": "http://localhost:3000/music/AlbumArt/Alex Warren, Jelly Roll - Bloodline (with Jelly Roll).jpg",
    "file": "http://localhost:3000/music/Alex Warren, Jelly Roll - Bloodline (with Jelly Roll).mp3",
    "rating": 5
  },
  {
    "id": 20,
    "title": "Bones",
    "artist": [
      "Imagine Dragons"
    ],
    "album": "Bones",
    "genre": "",
    "year": 2022,
    "length": 165,
    "albumArt": "http://localhost:3000/music/AlbumArt/Imagine Dragons - Bones.jpg",
    "file": "http://localhost:3000/music/Imagine Dragons - Bones.mp3",
    "rating": 5
  },
  {
    "id": 21,
    "title": "Born to Shine",
    "artist": [
      "Diljit Dosanjh"
    ],
    "album": "G.O.A.T.",
    "genre": "Bhangra",
    "year": 2020,
    "length": 213,
    "albumArt": "http://localhost:3000/music/AlbumArt/Diljit Dosanjh - Born to Shine.jpg",
    "file": "http://localhost:3000/music/Diljit Dosanjh - Born to Shine.mp3",
    "rating": 5
  },
  {
    "id": 22,
    "title": "Bre Petrunko",
    "artist": [
      "Dabro remix"
    ],
    "album": "Bre Petrunko",
    "genre": "",
    "year": 2020,
    "length": 158,
    "albumArt": "http://localhost:3000/music/AlbumArt/Dabro remix - Bre Petrunko.jpg",
    "file": "http://localhost:3000/music/Dabro remix - Bre Petrunko.mp3",
    "rating": 5
  },
  {
    "id": 23,
    "title": "Buddhu Sa Mann",
    "artist": [
      "Amaal Mallik",
      "Armaan Malik",
      "Abhiruchi Chand"
    ],
    "album": "Kapoor & Sons (Since 1921) (Original Motion Picture Soundtrack)",
    "genre": "Bollywood",
    "year": 2016,
    "length": 206,
    "albumArt": "http://localhost:3000/music/AlbumArt/Amaal Mallik, Armaan Malik, Abhiruchi Chand - Buddhu Sa Mann.jpg",
    "file": "http://localhost:3000/music/Amaal Mallik, Armaan Malik, Abhiruchi Chand - Buddhu Sa Mann.mp3",
    "rating": 5
  },
  {
    "id": 24,
    "title": "Bulleya",
    "artist": [
      "Pritam",
      "Amit Mishra",
      "Shilpa Rao"
    ],
    "album": "Ae Dil Hai Mushkil (Original Motion Picture Soundtrack) [Deluxe Edition]",
    "genre": "Bollywood",
    "year": 2016,
    "length": 349,
    "albumArt": "http://localhost:3000/music/AlbumArt/Pritam, Amit Mishra, Shilpa Rao - Bulleya.jpg",
    "file": "http://localhost:3000/music/Pritam, Amit Mishra, Shilpa Rao - Bulleya.mp3",
    "rating": 5
  },
  {
    "id": 25,
    "title": "Chahun Main Ya Naa",
    "artist": [
      "Palak Muchhal",
      "Arijit Singh"
    ],
    "album": "Aashiqui 2",
    "genre": "Bollywood",
    "year": 2013,
    "length": 304,
    "albumArt": "http://localhost:3000/music/AlbumArt/Palak Muchhal, Arijit Singh - Chahun Main Ya Naa.jpg",
    "file": "http://localhost:3000/music/Palak Muchhal, Arijit Singh - Chahun Main Ya Naa.mp3",
    "rating": 5
  },
  {
    "id": 26,
    "title": "Cheques",
    "artist": [
      "Shubh"
    ],
    "album": "Still Rollin",
    "genre": "Punjabi Hip Hop",
    "year": 2023,
    "length": 183,
    "albumArt": "http://localhost:3000/music/AlbumArt/Shubh - Cheques.jpg",
    "file": "http://localhost:3000/music/Shubh - Cheques.mp3",
    "rating": 5
  },
  {
    "id": 27,
    "title": "Cheri Cheri Lady",
    "artist": [
      "Modern Talking"
    ],
    "album": "Let's Talk About Love",
    "genre": "Italo Disco",
    "year": 1985,
    "length": 226,
    "albumArt": "http://localhost:3000/music/AlbumArt/Modern Talking - Cheri Cheri Lady.jpg",
    "file": "http://localhost:3000/music/Modern Talking - Cheri Cheri Lady.mp3",
    "rating": 5
  },
  {
    "id": 28,
    "title": "Choo Lo",
    "artist": [
      "The Local Train"
    ],
    "album": "Aalas Ka Pedh",
    "genre": "Indian Indie",
    "year": 2015,
    "length": 233,
    "albumArt": "http://localhost:3000/music/AlbumArt/The Local Train - Choo Lo.jpg",
    "file": "http://localhost:3000/music/The Local Train - Choo Lo.mp3",
    "rating": 5
  },
  {
    "id": 29,
    "title": "Co2",
    "artist": [
      "Prateek Kuhad"
    ],
    "album": "The Way That Lovers Do",
    "genre": "Indian Indie",
    "year": 2022,
    "length": 163,
    "albumArt": "http://localhost:3000/music/AlbumArt/Prateek Kuhad - Co2.jpg",
    "file": "http://localhost:3000/music/Prateek Kuhad - Co2.mp3",
    "rating": 5
  },
  {
    "id": 30,
    "title": "Cradles",
    "artist": [
      "Sub Urban"
    ],
    "album": "Cradles",
    "genre": "",
    "year": 2019,
    "length": 209,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sub Urban - Cradles.jpg",
    "file": "http://localhost:3000/music/Sub Urban - Cradles.mp3",
    "rating": 5
  },
  {
    "id": 31,
    "title": "Dekhte Dekhte",
    "artist": [
      "Atif Aslam",
      "Nusrat Fateh Ali Khan",
      "Rochak Kohli",
      "Manoj Muntashir"
    ],
    "album": "Batti Gul Meter Chalu",
    "genre": "Bollywood",
    "year": 2018,
    "length": 256,
    "albumArt": "http://localhost:3000/music/AlbumArt/Atif Aslam, Nusrat Fateh Ali Khan, Rochak Kohli, Manoj Muntashir - Dekhte Dekhte.jpg",
    "file": "http://localhost:3000/music/Atif Aslam, Nusrat Fateh Ali Khan, Rochak Kohli, Manoj Muntashir - Dekhte Dekhte.mp3",
    "rating": 5
  },
  {
    "id": 32,
    "title": "Dhadak - Title Track",
    "artist": [
      "Ajay Gogavale",
      "Shreya Ghoshal"
    ],
    "album": "Dhadak (Original Motion Picture Soundtrack)",
    "genre": "Marathi Pop",
    "year": 2018,
    "length": 243,
    "albumArt": "http://localhost:3000/music/AlbumArt/Ajay Gogavale, Shreya Ghoshal - Dhadak - Title Track.jpg",
    "file": "http://localhost:3000/music/Ajay Gogavale, Shreya Ghoshal - Dhadak - Title Track.mp3",
    "rating": 5
  },
  {
    "id": 33,
    "title": "Dil Kya Kare",
    "artist": [
      "Sanam"
    ],
    "album": "Universally SANAM",
    "genre": "Hindi Pop",
    "year": 2019,
    "length": 209,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sanam - Dil Kya Kare.jpg",
    "file": "http://localhost:3000/music/Sanam - Dil Kya Kare.mp3",
    "rating": 5
  },
  {
    "id": 34,
    "title": "Disco Disco",
    "artist": [
      "Sachin-Jigar",
      "Benny Dayal",
      "Shirley Setia"
    ],
    "album": "A Gentleman",
    "genre": "Gujarati Pop",
    "year": 2017,
    "length": 166,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sachin-Jigar, Benny Dayal, Shirley Setia - Disco Disco.jpg",
    "file": "http://localhost:3000/music/Sachin-Jigar, Benny Dayal, Shirley Setia - Disco Disco.mp3",
    "rating": 5
  },
  {
    "id": 35,
    "title": "Don't Start Now",
    "artist": [
      "Dua Lipa"
    ],
    "album": "Future Nostalgia",
    "genre": "Pop",
    "year": 2020,
    "length": 183,
    "albumArt": "http://localhost:3000/music/AlbumArt/Dua Lipa - Don't Start Now.jpg",
    "file": "http://localhost:3000/music/Dua Lipa - Don't Start Now.mp3",
    "rating": 5
  },
  {
    "id": 36,
    "title": "Dope Shope",
    "artist": [
      "Yo Yo Honey Singh",
      "Deep Money"
    ],
    "album": "International Villager",
    "genre": "Bollywood",
    "year": 2012,
    "length": 193,
    "albumArt": "http://localhost:3000/music/AlbumArt/Yo Yo Honey Singh, Deep Money - Dope Shope.jpg",
    "file": "http://localhost:3000/music/Yo Yo Honey Singh, Deep Money - Dope Shope.mp3",
    "rating": 5
  },
  {
    "id": 37,
    "title": "Duniyaa (From \"Luka Chuppi\")",
    "artist": [
      "Akhil",
      "Dhvani Bhanushali",
      "Kunaal Vermaa",
      "Abhijit Vaghani"
    ],
    "album": "Duniyaa (From \"Luka Chuppi\")",
    "genre": "Punjabi Pop",
    "year": 2019,
    "length": 222,
    "albumArt": "http://localhost:3000/music/AlbumArt/Akhil, Dhvani Bhanushali, Kunaal Vermaa, Abhijit Vaghani - Duniyaa (From 'Luka Chuppi').jpg",
    "file": "http://localhost:3000/music/Akhil, Dhvani Bhanushali, Kunaal Vermaa, Abhijit Vaghani - Duniyaa (From 'Luka Chuppi').mp3",
    "rating": 5
  },
  {
    "id": 38,
    "title": "Ek Ajnabee Haseena Se",
    "artist": [
      "Kishore Kumar",
      "R. D. Burman"
    ],
    "album": "Ajanabee",
    "genre": "Ghazal",
    "year": 1974,
    "length": 266,
    "albumArt": "http://localhost:3000/music/AlbumArt/Kishore Kumar, R. D. Burman - Ek Ajnabee Haseena Se.jpg",
    "file": "http://localhost:3000/music/Kishore Kumar, R. D. Burman - Ek Ajnabee Haseena Se.mp3",
    "rating": 5
  },
  {
    "id": 39,
    "title": "Ek Ajnabee Haseena Se - Chill Mix",
    "artist": [
      "SPECRO X SKETCH",
      "Kishore Kumar"
    ],
    "album": "Ek Ajnabee Haseena Se - Chill Mix",
    "genre": "Kannada Pop",
    "year": 2024,
    "length": 113,
    "albumArt": "http://localhost:3000/music/AlbumArt/SPECRO X SKETCH, Kishore Kumar - Ek Ajnabee Haseena Se - Chill Mix.jpg",
    "file": "http://localhost:3000/music/SPECRO X SKETCH, Kishore Kumar - Ek Ajnabee Haseena Se - Chill Mix.mp3",
    "rating": 5
  },
  {
    "id": 40,
    "title": "Enemy (with JID) - from the series Arcane League of Legends",
    "artist": [
      "Imagine Dragons",
      "JID",
      "Arcane",
      "League of Legends"
    ],
    "album": "Enemy (with JID) [from the series Arcane League of Legends]",
    "genre": "",
    "year": 2021,
    "length": 173,
    "albumArt": "http://localhost:3000/music/AlbumArt/Imagine Dragons, JID, Arcane, League of Legends - Enemy (with JID) - from the series Arcane League of Legends.jpg",
    "file": "http://localhost:3000/music/Imagine Dragons, JID, Arcane, League of Legends - Enemy (with JID) - from the series Arcane League of Legends.mp3",
    "rating": 5
  },
  {
    "id": 41,
    "title": "Excuses",
    "artist": [
      "AP Dhillon",
      "Gurinder Gill",
      "Intense"
    ],
    "album": "Excuses",
    "genre": "Punjabi Hip Hop",
    "year": 2020,
    "length": 176,
    "albumArt": "http://localhost:3000/music/AlbumArt/AP Dhillon, Gurinder Gill, Intense - Excuses.jpg",
    "file": "http://localhost:3000/music/AP Dhillon, Gurinder Gill, Intense - Excuses.mp3",
    "rating": 5
  },
  {
    "id": 42,
    "title": "Expiration Dating",
    "artist": [
      "Madelline"
    ],
    "album": "Expiration Dating",
    "genre": "",
    "year": 2025,
    "length": 180,
    "albumArt": "http://localhost:3000/music/AlbumArt/Madelline - Expiration Dating.jpg",
    "file": "http://localhost:3000/music/Madelline - Expiration Dating.mp3",
    "rating": 5
  },
  {
    "id": 43,
    "title": "Faded",
    "artist": [
      "Alan Walker"
    ],
    "album": "Faded",
    "genre": "",
    "year": 2015,
    "length": 212,
    "albumArt": "http://localhost:3000/music/AlbumArt/Alan Walker - Faded.jpg",
    "file": "http://localhost:3000/music/Alan Walker - Faded.mp3",
    "rating": 5
  },
  {
    "id": 44,
    "title": "Fairytale",
    "artist": [
      "Alexander Rybak"
    ],
    "album": "Fairytale",
    "genre": "",
    "year": 2009,
    "length": 182,
    "albumArt": "http://localhost:3000/music/AlbumArt/Alexander Rybak - Fairytale.jpg",
    "file": "http://localhost:3000/music/Alexander Rybak - Fairytale.mp3",
    "rating": 5
  },
  {
    "id": 45,
    "title": "Fearless Pt. II",
    "artist": [
      "Lost Sky",
      "Chris Linton"
    ],
    "album": "Fearless Pt. II",
    "genre": "",
    "year": 2017,
    "length": 194,
    "albumArt": "http://localhost:3000/music/AlbumArt/Lost Sky, Chris Linton - Fearless Pt. II.jpg",
    "file": "http://localhost:3000/music/Lost Sky, Chris Linton - Fearless Pt. II.mp3",
    "rating": 5
  },
  {
    "id": 46,
    "title": "GigaChad Theme - Phonk House Version",
    "artist": [
      "g3ox_em"
    ],
    "album": "GigaChad Theme (Phonk House Version)",
    "genre": "Phonk",
    "year": 2022,
    "length": 146,
    "albumArt": "http://localhost:3000/music/AlbumArt/g3ox_em - GigaChad Theme - Phonk House Version.jpg",
    "file": "http://localhost:3000/music/g3ox_em - GigaChad Theme - Phonk House Version.mp3",
    "rating": 5
  },
  {
    "id": 47,
    "title": "Gulabi Aankhen",
    "artist": [
      "Sanam"
    ],
    "album": "Universally SANAM",
    "genre": "Hindi Pop",
    "year": 2019,
    "length": 197,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sanam - Gulabi Aankhen.jpg",
    "file": "http://localhost:3000/music/Sanam - Gulabi Aankhen.mp3",
    "rating": 5
  },
  {
    "id": 48,
    "title": "Hai Apna Dil To Aawara - Happy",
    "artist": [
      "Hemant Kumar",
      "S. D. Burman"
    ],
    "album": "Solva Saal",
    "genre": "Bangla Pop",
    "year": 1958,
    "length": 261,
    "albumArt": "http://localhost:3000/music/AlbumArt/Hemant Kumar, S. D. Burman - Hai Apna Dil To Aawara - Happy.jpg",
    "file": "http://localhost:3000/music/Hemant Kumar, S. D. Burman - Hai Apna Dil To Aawara - Happy.mp3",
    "rating": 5
  },
  {
    "id": 49,
    "title": "Happy Nation",
    "artist": [
      "Ace of Base"
    ],
    "album": "Happy Nation",
    "genre": "Eurodance",
    "year": 1992,
    "length": 255,
    "albumArt": "http://localhost:3000/music/AlbumArt/Ace of Base - Happy Nation.jpg",
    "file": "http://localhost:3000/music/Ace of Base - Happy Nation.mp3",
    "rating": 5
  },
  {
    "id": 50,
    "title": "Happy Nation Phonk",
    "artist": [
      "x3L"
    ],
    "album": "Happy Nation Phonk",
    "genre": "",
    "year": 2024,
    "length": 78,
    "albumArt": "http://localhost:3000/music/AlbumArt/x3L - Happy Nation Phonk.jpg",
    "file": "http://localhost:3000/music/x3L - Happy Nation Phonk.mp3",
    "rating": 5
  },
  {
    "id": 51,
    "title": "Har Kisi Ko",
    "artist": [
      "Arijit Singh",
      "Neeti Mohan"
    ],
    "album": "Akshay Kumar - Feeling Blue",
    "genre": "Hindi Pop",
    "year": 2016,
    "length": 337,
    "albumArt": "http://localhost:3000/music/AlbumArt/Arijit Singh, Neeti Mohan - Har Kisi Ko.jpg",
    "file": "http://localhost:3000/music/Arijit Singh, Neeti Mohan - Har Kisi Ko.mp3",
    "rating": 5
  },
  {
    "id": 52,
    "title": "Hasi - Male Version",
    "artist": [
      "Ami Mishra",
      "Kunaal Vermaa"
    ],
    "album": "Hamari Adhuri Kahani (Original Motion Picture Soundtrack)",
    "genre": "Bollywood",
    "year": 2015,
    "length": 272,
    "albumArt": "http://localhost:3000/music/AlbumArt/Ami Mishra, Kunaal Vermaa - Hasi - Male Version.jpg",
    "file": "http://localhost:3000/music/Ami Mishra, Kunaal Vermaa - Hasi - Male Version.mp3",
    "rating": 5
  },
  {
    "id": 53,
    "title": "Heat Waves",
    "artist": [
      "Glass Animals"
    ],
    "album": "Heat Waves",
    "genre": "",
    "year": 2020,
    "length": 238,
    "albumArt": "http://localhost:3000/music/AlbumArt/Glass Animals - Heat Waves.jpg",
    "file": "http://localhost:3000/music/Glass Animals - Heat Waves.mp3",
    "rating": 5
  },
  {
    "id": 54,
    "title": "Hey Mama (feat. Nicki Minaj, Bebe Rexha & Afrojack)",
    "artist": [
      "David Guetta",
      "AFROJACK",
      "Bebe Rexha",
      "Nicki Minaj"
    ],
    "album": "Listen",
    "genre": "Edm",
    "year": 2014,
    "length": 192,
    "albumArt": "http://localhost:3000/music/AlbumArt/David Guetta, AFROJACK, Bebe Rexha, Nicki Minaj - Hey Mama (feat. Nicki Minaj, Bebe Rexha & Afrojack).jpg",
    "file": "http://localhost:3000/music/David Guetta, AFROJACK, Bebe Rexha, Nicki Minaj - Hey Mama (feat. Nicki Minaj, Bebe Rexha & Afrojack).mp3",
    "rating": 5
  },
  {
    "id": 55,
    "title": "Hum Bewafa Hargiz Na The",
    "artist": [
      "Sanam"
    ],
    "album": "Universally SANAM",
    "genre": "Hindi Pop",
    "year": 2019,
    "length": 206,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sanam - Hum Bewafa Hargiz Na The.jpg",
    "file": "http://localhost:3000/music/Sanam - Hum Bewafa Hargiz Na The.mp3",
    "rating": 5
  },
  {
    "id": 56,
    "title": "Humdard (From \"Ek Villain\")",
    "artist": [
      "Arijit Singh"
    ],
    "album": "Ultimate Love Songs - Arijit Singh",
    "genre": "Hindi Pop",
    "year": 2020,
    "length": 260,
    "albumArt": "http://localhost:3000/music/AlbumArt/Arijit Singh - Humdard (From 'Ek Villain').jpg",
    "file": "http://localhost:3000/music/Arijit Singh - Humdard (From 'Ek Villain').mp3",
    "rating": 5
  },
  {
    "id": 57,
    "title": "Humnava Mere",
    "artist": [
      "Jubin Nautiyal",
      "Manoj Muntashir"
    ],
    "album": "Humnava Mere",
    "genre": "Bhajan",
    "year": 2018,
    "length": 329,
    "albumArt": "http://localhost:3000/music/AlbumArt/Jubin Nautiyal, Manoj Muntashir - Humnava Mere.jpg",
    "file": "http://localhost:3000/music/Jubin Nautiyal, Manoj Muntashir - Humnava Mere.mp3",
    "rating": 5
  },
  {
    "id": 58,
    "title": "Husn",
    "artist": [
      "Anuv Jain"
    ],
    "album": "Husn",
    "genre": "Indian Indie",
    "year": 2023,
    "length": 217,
    "albumArt": "http://localhost:3000/music/AlbumArt/Anuv Jain - Husn.jpg",
    "file": "http://localhost:3000/music/Anuv Jain - Husn.mp3",
    "rating": 5
  },
  {
    "id": 59,
    "title": "Ievan Polkka (Progressive Dance Remix)",
    "artist": [
      "JDneX"
    ],
    "album": "Ievan Polkka (Progressive Dance Remix)",
    "genre": "Vocaloid",
    "year": 2016,
    "length": 263,
    "albumArt": "http://localhost:3000/music/AlbumArt/JDneX - Ievan Polkka (Progressive Dance Remix).jpg",
    "file": "http://localhost:3000/music/JDneX - Ievan Polkka (Progressive Dance Remix).mp3",
    "rating": 5
  },
  {
    "id": 60,
    "title": "Ilahi",
    "artist": [
      "Pritam",
      "Arijit Singh"
    ],
    "album": "Yeh Jawaani Hai Deewani",
    "genre": "Bollywood",
    "year": 2013,
    "length": 229,
    "albumArt": "http://localhost:3000/music/AlbumArt/Pritam, Arijit Singh - Ilahi.jpg",
    "file": "http://localhost:3000/music/Pritam, Arijit Singh - Ilahi.mp3",
    "rating": 5
  },
  {
    "id": 61,
    "title": "In The End - Mellen Gi Remix",
    "artist": [
      "Tommee Profitt",
      "Fleurie",
      "Mellen Gi"
    ],
    "album": "In The End",
    "genre": "",
    "year": 2019,
    "length": 218,
    "albumArt": "http://localhost:3000/music/AlbumArt/Tommee Profitt, Fleurie, Mellen Gi - In The End - Mellen Gi Remix.jpg",
    "file": "http://localhost:3000/music/Tommee Profitt, Fleurie, Mellen Gi - In The End - Mellen Gi Remix.mp3",
    "rating": 5
  },
  {
    "id": 62,
    "title": "INDUSTRY BABY (feat. Jack Harlow)",
    "artist": [
      "Lil Nas X",
      "Jack Harlow"
    ],
    "album": "INDUSTRY BABY (feat. Jack Harlow)",
    "genre": "",
    "year": 2021,
    "length": 212,
    "albumArt": "http://localhost:3000/music/AlbumArt/Lil Nas X, Jack Harlow - INDUSTRY BABY (feat. Jack Harlow).jpg",
    "file": "http://localhost:3000/music/Lil Nas X, Jack Harlow - INDUSTRY BABY (feat. Jack Harlow).mp3",
    "rating": 5
  },
  {
    "id": 63,
    "title": "Ishq",
    "artist": [
      "Faheem Abdullah",
      "Rauhan Malik",
      "Amir Ameer"
    ],
    "album": "Lost;Found",
    "genre": "Indian Indie",
    "year": 2024,
    "length": 228,
    "albumArt": "http://localhost:3000/music/AlbumArt/Faheem Abdullah, Rauhan Malik, Amir Ameer - Ishq.jpg",
    "file": "http://localhost:3000/music/Faheem Abdullah, Rauhan Malik, Amir Ameer - Ishq.mp3",
    "rating": 5
  },
  {
    "id": 64,
    "title": "İzmir Marşı",
    "artist": [
      "CVRTOON"
    ],
    "album": "İzmir Marşı",
    "genre": "",
    "year": 2019,
    "length": 259,
    "albumArt": "http://localhost:3000/music/AlbumArt/CVRTOON - İzmir Marşı.jpg",
    "file": "http://localhost:3000/music/CVRTOON - İzmir Marşı.mp3",
    "rating": 5
  },
  {
    "id": 65,
    "title": "Jashn-E-Bahaaraa",
    "artist": [
      "A.R. Rahman",
      "Javed Ali"
    ],
    "album": "Jodhaa Akbar (Original Motion Picture Soundtrack)",
    "genre": "Tamil Pop",
    "year": 2007,
    "length": 314,
    "albumArt": "http://localhost:3000/music/AlbumArt/A.R. Rahman, Javed Ali - Jashn-E-Bahaaraa.jpg",
    "file": "http://localhost:3000/music/A.R. Rahman, Javed Ali - Jashn-E-Bahaaraa.mp3",
    "rating": 5
  },
  {
    "id": 66,
    "title": "Jee Karda - Rock Version",
    "artist": [
      "Sachin-Jigar",
      "Divya Kumar",
      "Priya Saraiya"
    ],
    "album": "Badlapur (Original Motion Picture Soundtrack)",
    "genre": "Gujarati Pop",
    "year": 2014,
    "length": 239,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sachin-Jigar, Divya Kumar, Priya Saraiya - Jee Karda - Rock Version.jpg",
    "file": "http://localhost:3000/music/Sachin-Jigar, Divya Kumar, Priya Saraiya - Jee Karda - Rock Version.mp3",
    "rating": 5
  },
  {
    "id": 67,
    "title": "Jeena Jeena",
    "artist": [
      "Sachin-Jigar",
      "Atif Aslam",
      "Priya Saraiya"
    ],
    "album": "Badlapur (Original Motion Picture Soundtrack)",
    "genre": "Gujarati Pop",
    "year": 2014,
    "length": 229,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sachin-Jigar, Atif Aslam, Priya Saraiya - Jeena Jeena.jpg",
    "file": "http://localhost:3000/music/Sachin-Jigar, Atif Aslam, Priya Saraiya - Jeena Jeena.mp3",
    "rating": 5
  },
  {
    "id": 68,
    "title": "Jeene Laga Hoon",
    "artist": [
      "Atif Aslam",
      "Shreya Ghoshal",
      "Sachin-Jigar"
    ],
    "album": "Ramaiya Vastavaiya (Original Motion Picture Soundtrack)",
    "genre": "Bollywood",
    "year": 2013,
    "length": 235,
    "albumArt": "http://localhost:3000/music/AlbumArt/Atif Aslam, Shreya Ghoshal, Sachin-Jigar - Jeene Laga Hoon.jpg",
    "file": "http://localhost:3000/music/Atif Aslam, Shreya Ghoshal, Sachin-Jigar - Jeene Laga Hoon.mp3",
    "rating": 5
  },
  {
    "id": 69,
    "title": "Jo Tere Sang",
    "artist": [
      "Jeet Gannguli",
      "Mustafa Zahid"
    ],
    "album": "Blood Money (Original Motion Picture Soundtrack)",
    "genre": "Bangla Pop",
    "year": 2012,
    "length": 306,
    "albumArt": "http://localhost:3000/music/AlbumArt/Jeet Gannguli, Mustafa Zahid - Jo Tere Sang.jpg",
    "file": "http://localhost:3000/music/Jeet Gannguli, Mustafa Zahid - Jo Tere Sang.mp3",
    "rating": 5
  },
  {
    "id": 70,
    "title": "Jo Tum Mere Ho",
    "artist": [
      "Anuv Jain"
    ],
    "album": "Jo Tum Mere Ho",
    "genre": "Indian Indie",
    "year": 2024,
    "length": 251,
    "albumArt": "http://localhost:3000/music/AlbumArt/Anuv Jain - Jo Tum Mere Ho.jpg",
    "file": "http://localhost:3000/music/Anuv Jain - Jo Tum Mere Ho.mp3",
    "rating": 5
  },
  {
    "id": 71,
    "title": "Judaai",
    "artist": [
      "Sachin-Jigar",
      "Rekha Bhardwaj",
      "Arijit Singh",
      "Priya Saraiya"
    ],
    "album": "Badlapur (Original Motion Picture Soundtrack)",
    "genre": "Gujarati Pop",
    "year": 2014,
    "length": 272,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sachin-Jigar, Rekha Bhardwaj, Arijit Singh, Priya Saraiya - Judaai.jpg",
    "file": "http://localhost:3000/music/Sachin-Jigar, Rekha Bhardwaj, Arijit Singh, Priya Saraiya - Judaai.mp3",
    "rating": 5
  },
  {
    "id": 72,
    "title": "Kabhi Kabhi Aditi",
    "artist": [
      "Rashid Ali"
    ],
    "album": "Jaane Tu... Ya Jaane Na",
    "genre": "Bollywood",
    "year": 2008,
    "length": 218,
    "albumArt": "http://localhost:3000/music/AlbumArt/Rashid Ali - Kabhi Kabhi Aditi.jpg",
    "file": "http://localhost:3000/music/Rashid Ali - Kabhi Kabhi Aditi.mp3",
    "rating": 5
  },
  {
    "id": 73,
    "title": "Kahin Door Jab Din Dhal Jaye",
    "artist": [
      "Mukesh",
      "Salil Chowdhury"
    ],
    "album": "Anand",
    "genre": "Ghazal",
    "year": 1971,
    "length": 337,
    "albumArt": "http://localhost:3000/music/AlbumArt/Mukesh, Salil Chowdhury - Kahin Door Jab Din Dhal Jaye.jpg",
    "file": "http://localhost:3000/music/Mukesh, Salil Chowdhury - Kahin Door Jab Din Dhal Jaye.mp3",
    "rating": 5
  },
  {
    "id": 74,
    "title": "Kaise Hua (From \"Kabir Singh\")",
    "artist": [
      "Vishal Mishra",
      "Manoj Muntashir"
    ],
    "album": "Kaise Hua (From \"Kabir Singh\")",
    "genre": "Bollywood",
    "year": 2019,
    "length": 234,
    "albumArt": "http://localhost:3000/music/AlbumArt/Vishal Mishra, Manoj Muntashir - Kaise Hua (From 'Kabir Singh').jpg",
    "file": "http://localhost:3000/music/Vishal Mishra, Manoj Muntashir - Kaise Hua (From 'Kabir Singh').mp3",
    "rating": 5
  },
  {
    "id": 75,
    "title": "Kesariya (From \"Brahmastra\")",
    "artist": [
      "Pritam",
      "Arijit Singh",
      "Amitabh Bhattacharya"
    ],
    "album": "Kesariya (From \"Brahmastra\")",
    "genre": "Bollywood",
    "year": 2022,
    "length": 268,
    "albumArt": "http://localhost:3000/music/AlbumArt/Pritam, Arijit Singh, Amitabh Bhattacharya - Kesariya (From 'Brahmastra').jpg",
    "file": "http://localhost:3000/music/Pritam, Arijit Singh, Amitabh Bhattacharya - Kesariya (From 'Brahmastra').mp3",
    "rating": 5
  },
  {
    "id": 76,
    "title": "Khamoshiyan",
    "artist": [
      "Jeet Gannguli",
      "Arijit Singh",
      "Rashmi Virag"
    ],
    "album": "Khamoshiyan (Original Motion Picture Soundtrack)",
    "genre": "Bangla Pop",
    "year": 2014,
    "length": 335,
    "albumArt": "http://localhost:3000/music/AlbumArt/Jeet Gannguli, Arijit Singh, Rashmi Virag - Khamoshiyan.jpg",
    "file": "http://localhost:3000/music/Jeet Gannguli, Arijit Singh, Rashmi Virag - Khamoshiyan.mp3",
    "rating": 5
  },
  {
    "id": 77,
    "title": "Khwab Ho Tum Ya Koi Haqeeqat",
    "artist": [
      "Kishore Kumar",
      "S. D. Burman"
    ],
    "album": "Teen Devian",
    "genre": "Ghazal",
    "year": 1965,
    "length": 333,
    "albumArt": "http://localhost:3000/music/AlbumArt/Kishore Kumar, S. D. Burman - Khwab Ho Tum Ya Koi Haqeeqat.jpg",
    "file": "http://localhost:3000/music/Kishore Kumar, S. D. Burman - Khwab Ho Tum Ya Koi Haqeeqat.mp3",
    "rating": 5
  },
  {
    "id": 78,
    "title": "Kya Hua Tera Vada",
    "artist": [
      "Sushma Shrestha",
      "Mohammed Rafi",
      "R. D. Burman"
    ],
    "album": "Hum Kisise Kum Naheen",
    "genre": "Ghazal",
    "year": 1977,
    "length": 258,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sushma Shrestha, Mohammed Rafi, R. D. Burman - Kya Hua Tera Vada.jpg",
    "file": "http://localhost:3000/music/Sushma Shrestha, Mohammed Rafi, R. D. Burman - Kya Hua Tera Vada.mp3",
    "rating": 5
  },
  {
    "id": 79,
    "title": "Kya Mujhe Pyar Hai",
    "artist": [
      "Pritam",
      "KK",
      "Neelesh Misra"
    ],
    "album": "Woh Lamhe",
    "genre": "Bollywood",
    "year": 2006,
    "length": 266,
    "albumArt": "http://localhost:3000/music/AlbumArt/Pritam, KK, Neelesh Misra - Kya Mujhe Pyar Hai.jpg",
    "file": "http://localhost:3000/music/Pritam, KK, Neelesh Misra - Kya Mujhe Pyar Hai.mp3",
    "rating": 5
  },
  {
    "id": 80,
    "title": "Lag Ja Gale",
    "artist": [
      "Sanam"
    ],
    "album": "Lag Ja Gale - Sanam",
    "genre": "Hindi Pop",
    "year": 2014,
    "length": 240,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sanam - Lag Ja Gale.jpg",
    "file": "http://localhost:3000/music/Sanam - Lag Ja Gale.mp3",
    "rating": 5
  },
  {
    "id": 81,
    "title": "Levitating",
    "artist": [
      "Dua Lipa"
    ],
    "album": "Future Nostalgia",
    "genre": "Pop",
    "year": 2020,
    "length": 203,
    "albumArt": "http://localhost:3000/music/AlbumArt/Dua Lipa - Levitating.jpg",
    "file": "http://localhost:3000/music/Dua Lipa - Levitating.mp3",
    "rating": 5
  },
  {
    "id": 82,
    "title": "Likhe Jo Khat Tujhe",
    "artist": [
      "Mohammed Rafi"
    ],
    "album": "Kanyadaan",
    "genre": "Ghazal",
    "year": 1968,
    "length": 273,
    "albumArt": "http://localhost:3000/music/AlbumArt/Mohammed Rafi - Likhe Jo Khat Tujhe.jpg",
    "file": "http://localhost:3000/music/Mohammed Rafi - Likhe Jo Khat Tujhe.mp3",
    "rating": 5
  },
  {
    "id": 83,
    "title": "Likhe Jo Khat Tujhe",
    "artist": [
      "Sanam"
    ],
    "album": "Sanam - Likhe Jo Khat Tujhe",
    "genre": "Hindi Pop",
    "year": 2020,
    "length": 203,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sanam - Likhe Jo Khat Tujhe.jpg",
    "file": "http://localhost:3000/music/Sanam - Likhe Jo Khat Tujhe.mp3",
    "rating": 5
  },
  {
    "id": 84,
    "title": "Lite Flow",
    "artist": [
      "Subodh Su2"
    ],
    "album": "Lite Flow",
    "genre": "",
    "year": 2025,
    "length": 210,
    "albumArt": "http://localhost:3000/music/AlbumArt/Subodh Su2 - Lite Flow.jpg",
    "file": "http://localhost:3000/music/Subodh Su2 - Lite Flow.mp3",
    "rating": 5
  },
  {
    "id": 85,
    "title": "Lo Maan Liya",
    "artist": [
      "Arijit Singh"
    ],
    "album": "Raaz Reboot",
    "genre": "Hindi Pop",
    "year": 2016,
    "length": 300,
    "albumArt": "http://localhost:3000/music/AlbumArt/Arijit Singh - Lo Maan Liya.jpg",
    "file": "http://localhost:3000/music/Arijit Singh - Lo Maan Liya.mp3",
    "rating": 5
  },
  {
    "id": 86,
    "title": "Love You Zindagi",
    "artist": [
      "Amit Trivedi",
      "Jasleen Royal",
      "Kausar Munir"
    ],
    "album": "Dear Zindagi (Original Motion Picture Soundtrack)",
    "genre": "Bollywood",
    "year": 2016,
    "length": 232,
    "albumArt": "http://localhost:3000/music/AlbumArt/Amit Trivedi, Jasleen Royal, Kausar Munir - Love You Zindagi.jpg",
    "file": "http://localhost:3000/music/Amit Trivedi, Jasleen Royal, Kausar Munir - Love You Zindagi.mp3",
    "rating": 5
  },
  {
    "id": 87,
    "title": "Luminary",
    "artist": [
      "Joel Sunny"
    ],
    "album": "Luminary",
    "genre": "",
    "year": 2023,
    "length": 189,
    "albumArt": "http://localhost:3000/music/AlbumArt/Joel Sunny - Luminary.jpg",
    "file": "http://localhost:3000/music/Joel Sunny - Luminary.mp3",
    "rating": 5
  },
  {
    "id": 88,
    "title": "Maan Meri Jaan",
    "artist": [
      "King"
    ],
    "album": "Champagne Talk",
    "genre": "Desi Hip Hop",
    "year": 2022,
    "length": 194,
    "albumArt": "http://localhost:3000/music/AlbumArt/King - Maan Meri Jaan.jpg",
    "file": "http://localhost:3000/music/King - Maan Meri Jaan.mp3",
    "rating": 5
  },
  {
    "id": 89,
    "title": "Mahiye Jinna Sohna",
    "artist": [
      "Darshan Raval"
    ],
    "album": "Dard",
    "genre": "Gujarati Garba",
    "year": 2023,
    "length": 181,
    "albumArt": "http://localhost:3000/music/AlbumArt/Darshan Raval - Mahiye Jinna Sohna.jpg",
    "file": "http://localhost:3000/music/Darshan Raval - Mahiye Jinna Sohna.mp3",
    "rating": 5
  },
  {
    "id": 90,
    "title": "Main Agar Kahoon",
    "artist": [
      "Vishal-Shekhar",
      "Sonu Nigam",
      "Shreya Ghoshal"
    ],
    "album": "Om Shanti Om",
    "genre": "Bollywood",
    "year": 2007,
    "length": 308,
    "albumArt": "http://localhost:3000/music/AlbumArt/Vishal-Shekhar, Sonu Nigam, Shreya Ghoshal - Main Agar Kahoon.jpg",
    "file": "http://localhost:3000/music/Vishal-Shekhar, Sonu Nigam, Shreya Ghoshal - Main Agar Kahoon.mp3",
    "rating": 5
  },
  {
    "id": 91,
    "title": "Main Dhoondne Ko Zamaane Mein (From \"Heartless\")",
    "artist": [
      "Arijit Singh"
    ],
    "album": "Arijit Singh Broken Strings",
    "genre": "Hindi Pop",
    "year": 2019,
    "length": 263,
    "albumArt": "http://localhost:3000/music/AlbumArt/Arijit Singh - Main Dhoondne Ko Zamaane Mein (From 'Heartless').jpg",
    "file": "http://localhost:3000/music/Arijit Singh - Main Dhoondne Ko Zamaane Mein (From 'Heartless').mp3",
    "rating": 5
  },
  {
    "id": 92,
    "title": "Main Pal Do Pal Ka Shair Hoon",
    "artist": [
      "Mukesh"
    ],
    "album": "Kabhi Kabhie",
    "genre": "Ghazal",
    "year": 1976,
    "length": 204,
    "albumArt": "http://localhost:3000/music/AlbumArt/Mukesh - Main Pal Do Pal Ka Shair Hoon.jpg",
    "file": "http://localhost:3000/music/Mukesh - Main Pal Do Pal Ka Shair Hoon.mp3",
    "rating": 5
  },
  {
    "id": 93,
    "title": "Main Rahoon Ya Na Rahoon",
    "artist": [
      "Amaal Mallik",
      "Armaan Malik",
      "Rashmi Virag"
    ],
    "album": "Main Rahoon Ya Na Rahoon",
    "genre": "Bollywood",
    "year": 2015,
    "length": 309,
    "albumArt": "http://localhost:3000/music/AlbumArt/Amaal Mallik, Armaan Malik, Rashmi Virag - Main Rahoon Ya Na Rahoon.jpg",
    "file": "http://localhost:3000/music/Amaal Mallik, Armaan Malik, Rashmi Virag - Main Rahoon Ya Na Rahoon.mp3",
    "rating": 5
  },
  {
    "id": 94,
    "title": "Main Rang Sharbaton Ka",
    "artist": [
      "Atif Aslam",
      "Chinmayi",
      "Pritam"
    ],
    "album": "Best of Romance: Atif Aslam & Pritam",
    "genre": "Bollywood",
    "year": 2023,
    "length": 263,
    "albumArt": "http://localhost:3000/music/AlbumArt/Atif Aslam, Chinmayi, Pritam - Main Rang Sharbaton Ka.jpg",
    "file": "http://localhost:3000/music/Atif Aslam, Chinmayi, Pritam - Main Rang Sharbaton Ka.mp3",
    "rating": 5
  },
  {
    "id": 95,
    "title": "Maiyya Mainu",
    "artist": [
      "Sachet Tandon",
      "Shellee"
    ],
    "album": "Jersey (Original Motion Picture Soundtrack)",
    "genre": "Bhajan",
    "year": 2022,
    "length": 231,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sachet Tandon, Shellee - Maiyya Mainu.jpg",
    "file": "http://localhost:3000/music/Sachet Tandon, Shellee - Maiyya Mainu.mp3",
    "rating": 5
  },
  {
    "id": 96,
    "title": "Malang Sajna",
    "artist": [
      "Sachet Tandon",
      "Parampara Tandon",
      "Kumaar",
      "Sachet-Parampara"
    ],
    "album": "Malang Sajna",
    "genre": "Bhajan",
    "year": 2022,
    "length": 161,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sachet Tandon, Parampara Tandon, Kumaar, Sachet-Parampara - Malang Sajna.jpg",
    "file": "http://localhost:3000/music/Sachet Tandon, Parampara Tandon, Kumaar, Sachet-Parampara - Malang Sajna.mp3",
    "rating": 5
  },
  {
    "id": 97,
    "title": "Mann Mera",
    "artist": [
      "Gajendra Verma"
    ],
    "album": "Table No. 21 (Original Motion Picture Soundtrack)",
    "genre": "Hindi Pop",
    "year": 2012,
    "length": 200,
    "albumArt": "http://localhost:3000/music/AlbumArt/Gajendra Verma - Mann Mera.jpg",
    "file": "http://localhost:3000/music/Gajendra Verma - Mann Mera.mp3",
    "rating": 5
  },
  {
    "id": 98,
    "title": "Mann Mera - Original Version",
    "artist": [
      "Gajendra Verma"
    ],
    "album": "Mann Mera (Original Version)",
    "genre": "Hindi Pop",
    "year": 2025,
    "length": 228,
    "albumArt": "http://localhost:3000/music/AlbumArt/Gajendra Verma - Mann Mera - Original Version.jpg",
    "file": "http://localhost:3000/music/Gajendra Verma - Mann Mera - Original Version.mp3",
    "rating": 5
  },
  {
    "id": 99,
    "title": "Mast Magan",
    "artist": [
      "Arijit Singh",
      "Chinmayi"
    ],
    "album": "2 States",
    "genre": "Hindi Pop",
    "year": 2014,
    "length": 280,
    "albumArt": "http://localhost:3000/music/AlbumArt/Arijit Singh, Chinmayi - Mast Magan.jpg",
    "file": "http://localhost:3000/music/Arijit Singh, Chinmayi - Mast Magan.mp3",
    "rating": 5
  },
  {
    "id": 100,
    "title": "MATUSHKA ULTRAFUNK",
    "artist": [
      "satirin"
    ],
    "album": "MATUSHKA ULTRAFUNK",
    "genre": "Phonk",
    "year": 2024,
    "length": 144,
    "albumArt": "http://localhost:3000/music/AlbumArt/satirin - MATUSHKA ULTRAFUNK.jpg",
    "file": "http://localhost:3000/music/satirin - MATUSHKA ULTRAFUNK.mp3",
    "rating": 5
  },
  {
    "id": 101,
    "title": "Mere Mehboob Qayamat Hogi",
    "artist": [
      "Kishore Kumar",
      "Laxmikant–Pyarelal"
    ],
    "album": "Mr. X In Bombay",
    "genre": "Ghazal",
    "year": 1964,
    "length": 228,
    "albumArt": "http://localhost:3000/music/AlbumArt/Kishore Kumar, Laxmikant–Pyarelal - Mere Mehboob Qayamat Hogi.jpg",
    "file": "http://localhost:3000/music/Kishore Kumar, Laxmikant–Pyarelal - Mere Mehboob Qayamat Hogi.mp3",
    "rating": 5
  },
  {
    "id": 102,
    "title": "Mere Mehboob Qayamat Hogi",
    "artist": [
      "Sanam",
      "Laxmikant–Pyarelal"
    ],
    "album": "Mere Mehboob Qayamat Hogi - Sanam",
    "genre": "Hindi Pop",
    "year": 2015,
    "length": 241,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sanam, Laxmikant–Pyarelal - Mere Mehboob Qayamat Hogi.jpg",
    "file": "http://localhost:3000/music/Sanam, Laxmikant–Pyarelal - Mere Mehboob Qayamat Hogi.mp3",
    "rating": 5
  },
  {
    "id": 103,
    "title": "Mere Samnewali Khidki Mein - Jhankar Beats",
    "artist": [
      "DJ Harshit Shah",
      "DJ MHD IND",
      "Sanam"
    ],
    "album": "Mere Samnewali Khidki Mein - Jhankar Beats",
    "genre": "",
    "year": 2023,
    "length": 181,
    "albumArt": "http://localhost:3000/music/AlbumArt/DJ Harshit Shah, DJ MHD IND, Sanam - Mere Samnewali Khidki Mein - Jhankar Beats.jpg",
    "file": "http://localhost:3000/music/DJ Harshit Shah, DJ MHD IND, Sanam - Mere Samnewali Khidki Mein - Jhankar Beats.mp3",
    "rating": 5
  },
  {
    "id": 104,
    "title": "Milne Hai Mujhse Aayi",
    "artist": [
      "Arijit Singh"
    ],
    "album": "Aashiqui 2",
    "genre": "Hindi Pop",
    "year": 2013,
    "length": 295,
    "albumArt": "http://localhost:3000/music/AlbumArt/Arijit Singh - Milne Hai Mujhse Aayi.jpg",
    "file": "http://localhost:3000/music/Arijit Singh - Milne Hai Mujhse Aayi.mp3",
    "rating": 5
  },
  {
    "id": 105,
    "title": "Milne Hai Mujhse Aayi (From \"Aashiqui 2\")",
    "artist": [
      "Arijit Singh"
    ],
    "album": "Arijit Singh Broken Strings",
    "genre": "Hindi Pop",
    "year": 2019,
    "length": 295,
    "albumArt": "http://localhost:3000/music/AlbumArt/Arijit Singh - Milne Hai Mujhse Aayi (From 'Aashiqui 2').jpg",
    "file": "http://localhost:3000/music/Arijit Singh - Milne Hai Mujhse Aayi (From 'Aashiqui 2').mp3",
    "rating": 5
  },
  {
    "id": 106,
    "title": "Mitwa",
    "artist": [
      "Shankar-Ehsaan-Loy",
      "Shankar Mahadevan",
      "Caralisa Monteiro",
      "Shafqat Amanat Ali"
    ],
    "album": "Kabhi Alvida Naa Kehna (Original Motion Picture Soundtrack)",
    "genre": "Bollywood",
    "year": 2006,
    "length": 383,
    "albumArt": "http://localhost:3000/music/AlbumArt/Shankar-Ehsaan-Loy, Shankar Mahadevan, Caralisa Monteiro, Shafqat Amanat Ali - Mitwa.jpg",
    "file": "http://localhost:3000/music/Shankar-Ehsaan-Loy, Shankar Mahadevan, Caralisa Monteiro, Shafqat Amanat Ali - Mitwa.mp3",
    "rating": 5
  },
  {
    "id": 107,
    "title": "Mortals",
    "artist": [
      "Warriyo"
    ],
    "album": "Mortals",
    "genre": "",
    "year": 2016,
    "length": 228,
    "albumArt": "http://localhost:3000/music/AlbumArt/Warriyo - Mortals.jpg",
    "file": "http://localhost:3000/music/Warriyo - Mortals.mp3",
    "rating": 5
  },
  {
    "id": 108,
    "title": "Nadaan Parinde",
    "artist": [
      "A.R. Rahman",
      "Mohit Chauhan"
    ],
    "album": "Rockstar",
    "genre": "Tamil Pop",
    "year": 2011,
    "length": 384,
    "albumArt": "http://localhost:3000/music/AlbumArt/A.R. Rahman, Mohit Chauhan - Nadaan Parinde.jpg",
    "file": "http://localhost:3000/music/A.R. Rahman, Mohit Chauhan - Nadaan Parinde.mp3",
    "rating": 5
  },
  {
    "id": 109,
    "title": "NEXT!",
    "artist": [
      "NCTS"
    ],
    "album": "NEXT!",
    "genre": "Phonk",
    "year": 2024,
    "length": 99,
    "albumArt": "http://localhost:3000/music/AlbumArt/NCTS - NEXT!.jpg",
    "file": "http://localhost:3000/music/NCTS - NEXT!.mp3",
    "rating": 5
  },
  {
    "id": 110,
    "title": "O Mere Dil Ke Chain",
    "artist": [
      "Kishore Kumar",
      "R. D. Burman"
    ],
    "album": "Mere Jeevan Saathi",
    "genre": "Ghazal",
    "year": 1972,
    "length": 273,
    "albumArt": "http://localhost:3000/music/AlbumArt/Kishore Kumar, R. D. Burman - O Mere Dil Ke Chain.jpg",
    "file": "http://localhost:3000/music/Kishore Kumar, R. D. Burman - O Mere Dil Ke Chain.mp3",
    "rating": 5
  },
  {
    "id": 111,
    "title": "O Mere Dil Ke Chain",
    "artist": [
      "Sanam",
      "R. D. Burman"
    ],
    "album": "O Mere Dil Ke Chain - Sanam",
    "genre": "Hindi Pop",
    "year": 2015,
    "length": 202,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sanam, R. D. Burman - O Mere Dil Ke Chain.jpg",
    "file": "http://localhost:3000/music/Sanam, R. D. Burman - O Mere Dil Ke Chain.mp3",
    "rating": 5
  },
  {
    "id": 112,
    "title": "O Saathi",
    "artist": [
      "Atif Aslam",
      "Arko"
    ],
    "album": "O Saathi (From \"Baaghi 2\")",
    "genre": "Bollywood",
    "year": 2018,
    "length": 251,
    "albumArt": "http://localhost:3000/music/AlbumArt/Atif Aslam, Arko - O Saathi.jpg",
    "file": "http://localhost:3000/music/Atif Aslam, Arko - O Saathi.mp3",
    "rating": 5
  },
  {
    "id": 113,
    "title": "On My Way",
    "artist": [
      "Alan Walker",
      "Sabrina Carpenter",
      "Farruko"
    ],
    "album": "On My Way",
    "genre": "",
    "year": 2019,
    "length": 193,
    "albumArt": "http://localhost:3000/music/AlbumArt/Alan Walker, Sabrina Carpenter, Farruko - On My Way.jpg",
    "file": "http://localhost:3000/music/Alan Walker, Sabrina Carpenter, Farruko - On My Way.mp3",
    "rating": 5
  },
  {
    "id": 114,
    "title": "One Love",
    "artist": [
      "Shubh"
    ],
    "album": "One Love",
    "genre": "Punjabi Hip Hop",
    "year": 2023,
    "length": 159,
    "albumArt": "http://localhost:3000/music/AlbumArt/Shubh - One Love.jpg",
    "file": "http://localhost:3000/music/Shubh - One Love.mp3",
    "rating": 5
  },
  {
    "id": 115,
    "title": "Pal Pal Dil Ke Paas - From \"Blackmail\"",
    "artist": [
      "Kishore Kumar"
    ],
    "album": "Blackmail (Original Motion Picture Soundtrack)",
    "genre": "Ghazal",
    "year": 1973,
    "length": 329,
    "albumArt": "http://localhost:3000/music/AlbumArt/Kishore Kumar - Pal Pal Dil Ke Paas - From 'Blackmail'.jpg",
    "file": "http://localhost:3000/music/Kishore Kumar - Pal Pal Dil Ke Paas - From 'Blackmail'.mp3",
    "rating": 5
  },
  {
    "id": 116,
    "title": "Pal Pal Dil Ke Paas - Title Track - From \"Pal Pal Dil Ke Paas\"",
    "artist": [
      "Arijit Singh",
      "Parampara Thakur"
    ],
    "album": "Pal Pal Dil Ke Paas - Title Track (From \"Pal Pal Dil Ke Paas\")",
    "genre": "Hindi Pop",
    "year": 2019,
    "length": 254,
    "albumArt": "http://localhost:3000/music/AlbumArt/Arijit Singh, Parampara Thakur - Pal Pal Dil Ke Paas - Title Track - From 'Pal Pal Dil Ke Paas'.jpg",
    "file": "http://localhost:3000/music/Arijit Singh, Parampara Thakur - Pal Pal Dil Ke Paas - Title Track - From 'Pal Pal Dil Ke Paas'.mp3",
    "rating": 5
  },
  {
    "id": 117,
    "title": "Party All Night",
    "artist": [
      "Yo Yo Honey Singh"
    ],
    "album": "Boss",
    "genre": "Bollywood",
    "year": 2013,
    "length": 282,
    "albumArt": "http://localhost:3000/music/AlbumArt/Yo Yo Honey Singh - Party All Night.jpg",
    "file": "http://localhost:3000/music/Yo Yo Honey Singh - Party All Night.mp3",
    "rating": 5
  },
  {
    "id": 118,
    "title": "Party All Night",
    "artist": [
      "Yo Yo Honey Singh",
      "Sahil Kaushal"
    ],
    "album": "Boss",
    "genre": "Bollywood",
    "year": 2013,
    "length": 282,
    "albumArt": "http://localhost:3000/music/AlbumArt/Yo Yo Honey Singh, Sahil Kaushal - Party All Night.jpg",
    "file": "http://localhost:3000/music/Yo Yo Honey Singh, Sahil Kaushal - Party All Night.mp3",
    "rating": 5
  },
  {
    "id": 119,
    "title": "PASSO BEM SOLTO - Slowed",
    "artist": [
      "ATLXS"
    ],
    "album": "PASSO BEM SOLTO",
    "genre": "Phonk",
    "year": 2024,
    "length": 116,
    "albumArt": "http://localhost:3000/music/AlbumArt/ATLXS - PASSO BEM SOLTO - Slowed.jpg",
    "file": "http://localhost:3000/music/ATLXS - PASSO BEM SOLTO - Slowed.mp3",
    "rating": 5
  },
  {
    "id": 120,
    "title": "Pehli Dafa",
    "artist": [
      "Atif Aslam",
      "Shiraz Uppal"
    ],
    "album": "Pehli Dafa",
    "genre": "Bollywood",
    "year": 2017,
    "length": 298,
    "albumArt": "http://localhost:3000/music/AlbumArt/Atif Aslam, Shiraz Uppal - Pehli Dafa.jpg",
    "file": "http://localhost:3000/music/Atif Aslam, Shiraz Uppal - Pehli Dafa.mp3",
    "rating": 5
  },
  {
    "id": 121,
    "title": "Phir Aur Kya Chahiye (From \"Zara Hatke Zara Bachke\")",
    "artist": [
      "Sachin-Jigar",
      "Arijit Singh",
      "Amitabh Bhattacharya"
    ],
    "album": "Zara Hatke Zara Bachke",
    "genre": "Gujarati Pop",
    "year": 2023,
    "length": 266,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya - Phir Aur Kya Chahiye (From 'Zara Hatke Zara Bachke').jpg",
    "file": "http://localhost:3000/music/Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya - Phir Aur Kya Chahiye (From 'Zara Hatke Zara Bachke').mp3",
    "rating": 5
  },
  {
    "id": 122,
    "title": "Phir Bhi Tumko Chaahunga",
    "artist": [
      "Mithoon",
      "Arijit Singh",
      "Shashaa Tirupati"
    ],
    "album": "The Arijit Singh Collection",
    "genre": "Bollywood",
    "year": 2023,
    "length": 351,
    "albumArt": "http://localhost:3000/music/AlbumArt/Mithoon, Arijit Singh, Shashaa Tirupati - Phir Bhi Tumko Chaahunga.jpg",
    "file": "http://localhost:3000/music/Mithoon, Arijit Singh, Shashaa Tirupati - Phir Bhi Tumko Chaahunga.mp3",
    "rating": 5
  },
  {
    "id": 123,
    "title": "Pirates Of The Caribbean (Main Theme)",
    "artist": [
      "The Intermezzo Orchestra"
    ],
    "album": "The Movie Night Album",
    "genre": "",
    "year": 2015,
    "length": 191,
    "albumArt": "http://localhost:3000/music/AlbumArt/The Intermezzo Orchestra - Pirates Of The Caribbean (Main Theme).jpg",
    "file": "http://localhost:3000/music/The Intermezzo Orchestra - Pirates Of The Caribbean (Main Theme).mp3",
    "rating": 5
  },
  {
    "id": 124,
    "title": "Plevne",
    "artist": [
      "CVRTOON"
    ],
    "album": "Plevne",
    "genre": "",
    "year": 2020,
    "length": 199,
    "albumArt": "http://localhost:3000/music/AlbumArt/CVRTOON - Plevne.jpg",
    "file": "http://localhost:3000/music/CVRTOON - Plevne.mp3",
    "rating": 5
  },
  {
    "id": 125,
    "title": "Pyaar Hota Kayi Baar Hai",
    "artist": [
      "Pritam",
      "Arijit Singh",
      "Amitabh Bhattacharya",
      "Charan"
    ],
    "album": "Tu Jhoothi Main Makkaar",
    "genre": "Bollywood",
    "year": 2023,
    "length": 216,
    "albumArt": "http://localhost:3000/music/AlbumArt/Pritam, Arijit Singh, Amitabh Bhattacharya, Charan - Pyaar Hota Kayi Baar Hai.jpg",
    "file": "http://localhost:3000/music/Pritam, Arijit Singh, Amitabh Bhattacharya, Charan - Pyaar Hota Kayi Baar Hai.mp3",
    "rating": 5
  },
  {
    "id": 126,
    "title": "Pyar Diwana Hota Hai",
    "artist": [
      "Kishore Kumar",
      "R. D. Burman"
    ],
    "album": "Kati Patang",
    "genre": "Ghazal",
    "year": 1970,
    "length": 284,
    "albumArt": "http://localhost:3000/music/AlbumArt/Kishore Kumar, R. D. Burman - Pyar Diwana Hota Hai.jpg",
    "file": "http://localhost:3000/music/Kishore Kumar, R. D. Burman - Pyar Diwana Hota Hai.mp3",
    "rating": 5
  },
  {
    "id": 127,
    "title": "Pyar Hua Iqrar Hua",
    "artist": [
      "Manna Dey",
      "Lata Mangeshkar"
    ],
    "album": "Shree 420",
    "genre": "Bangla Pop",
    "year": 1955,
    "length": 260,
    "albumArt": "http://localhost:3000/music/AlbumArt/Manna Dey, Lata Mangeshkar - Pyar Hua Iqrar Hua.jpg",
    "file": "http://localhost:3000/music/Manna Dey, Lata Mangeshkar - Pyar Hua Iqrar Hua.mp3",
    "rating": 5
  },
  {
    "id": 128,
    "title": "Raanjhanaa (From \"Raanjhanaa\")",
    "artist": [
      "A.R. Rahman",
      "Jaswinder Singh",
      "Shiraz Uppal"
    ],
    "album": "Raanjhanaa (Original Motion Picture Soundtrack)",
    "genre": "Tamil Pop",
    "year": 2013,
    "length": 256,
    "albumArt": "http://localhost:3000/music/AlbumArt/A.R. Rahman, Jaswinder Singh, Shiraz Uppal - Raanjhanaa (From 'Raanjhanaa').jpg",
    "file": "http://localhost:3000/music/A.R. Rahman, Jaswinder Singh, Shiraz Uppal - Raanjhanaa (From 'Raanjhanaa').mp3",
    "rating": 5
  },
  {
    "id": 129,
    "title": "Raataan Lambiyan (From \"Shershaah\")",
    "artist": [
      "Tanishk Bagchi",
      "Jubin Nautiyal",
      "Asees Kaur"
    ],
    "album": "Raataan Lambiyan (From \"Shershaah\")",
    "genre": "Bollywood",
    "year": 2021,
    "length": 230,
    "albumArt": "http://localhost:3000/music/AlbumArt/Tanishk Bagchi, Jubin Nautiyal, Asees Kaur - Raataan Lambiyan (From 'Shershaah').jpg",
    "file": "http://localhost:3000/music/Tanishk Bagchi, Jubin Nautiyal, Asees Kaur - Raataan Lambiyan (From 'Shershaah').mp3",
    "rating": 5
  },
  {
    "id": 130,
    "title": "Rasputin",
    "artist": [
      "Boney M."
    ],
    "album": "Nightflight to Venus",
    "genre": "Disco",
    "year": 1978,
    "length": 351,
    "albumArt": "http://localhost:3000/music/AlbumArt/Boney M. - Rasputin.jpg",
    "file": "http://localhost:3000/music/Boney M. - Rasputin.mp3",
    "rating": 5
  },
  {
    "id": 131,
    "title": "Royalty",
    "artist": [
      "Egzod",
      "Maestro Chives",
      "Neoni"
    ],
    "album": "Royalty",
    "genre": "",
    "year": 2021,
    "length": 223,
    "albumArt": "http://localhost:3000/music/AlbumArt/Egzod, Maestro Chives, Neoni - Royalty.jpg",
    "file": "http://localhost:3000/music/Egzod, Maestro Chives, Neoni - Royalty.mp3",
    "rating": 5
  },
  {
    "id": 132,
    "title": "Rush E",
    "artist": [
      "Sheet Music Boss"
    ],
    "album": "Rush Collection",
    "genre": "",
    "year": 2020,
    "length": 144,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sheet Music Boss - Rush E.jpg",
    "file": "http://localhost:3000/music/Sheet Music Boss - Rush E.mp3",
    "rating": 5
  },
  {
    "id": 133,
    "title": "S'Hab Music - Remix",
    "artist": [
      "N'gaous",
      "RANDALL"
    ],
    "album": "S'Hab N'gaous",
    "genre": "",
    "year": 2019,
    "length": 148,
    "albumArt": "http://localhost:3000/music/AlbumArt/N'gaous, RANDALL - S'Hab Music - Remix.jpg",
    "file": "http://localhost:3000/music/N'gaous, RANDALL - S'Hab Music - Remix.mp3",
    "rating": 5
  },
  {
    "id": 134,
    "title": "Saagar Jaisi Aankhonwali - From \"Saagar\"",
    "artist": [
      "Kishore Kumar",
      "R. D. Burman"
    ],
    "album": "Saagar (Original Motion Picture Soundtrack)",
    "genre": "Ghazal",
    "year": 1985,
    "length": 302,
    "albumArt": "http://localhost:3000/music/AlbumArt/Kishore Kumar, R. D. Burman - Saagar Jaisi Aankhonwali - From 'Saagar'.jpg",
    "file": "http://localhost:3000/music/Kishore Kumar, R. D. Burman - Saagar Jaisi Aankhonwali - From 'Saagar'.mp3",
    "rating": 5
  },
  {
    "id": 135,
    "title": "Samjhawan",
    "artist": [
      "Jawad Ahmad",
      "Shaarib Toshi",
      "Arijit Singh",
      "Shreya Ghoshal"
    ],
    "album": "Samjhawan",
    "genre": "Bollywood",
    "year": 2014,
    "length": 269,
    "albumArt": "http://localhost:3000/music/AlbumArt/Jawad Ahmad, Shaarib Toshi, Arijit Singh, Shreya Ghoshal - Samjhawan.jpg",
    "file": "http://localhost:3000/music/Jawad Ahmad, Shaarib Toshi, Arijit Singh, Shreya Ghoshal - Samjhawan.mp3",
    "rating": 5
  },
  {
    "id": 136,
    "title": "Sanam Re (From \"Sanam Re\")",
    "artist": [
      "Mithoon",
      "Arijit Singh"
    ],
    "album": "Love Forever With Arijit Singh",
    "genre": "Bollywood",
    "year": 2017,
    "length": 308,
    "albumArt": "http://localhost:3000/music/AlbumArt/Mithoon, Arijit Singh - Sanam Re (From 'Sanam Re').jpg",
    "file": "http://localhost:3000/music/Mithoon, Arijit Singh - Sanam Re (From 'Sanam Re').mp3",
    "rating": 5
  },
  {
    "id": 137,
    "title": "Sanson Ki Mala Pe",
    "artist": [
      "Nusrat Fateh Ali Khan"
    ],
    "album": "Best of Ustad Nusrat Fateh Ali Khan",
    "genre": "Qawwali",
    "year": 2015,
    "length": 1801,
    "albumArt": "http://localhost:3000/music/AlbumArt/Nusrat Fateh Ali Khan - Sanson Ki Mala Pe.jpg",
    "file": "http://localhost:3000/music/Nusrat Fateh Ali Khan - Sanson Ki Mala Pe.mp3",
    "rating": 5
  },
  {
    "id": 138,
    "title": "Sanson Ki Mala Pe - Cover",
    "artist": [
      "André Antunes",
      "Shan Padman"
    ],
    "album": "Sanson Ki Mala Pe (Cover)",
    "genre": "Neoclassical",
    "year": 2023,
    "length": 282,
    "albumArt": "http://localhost:3000/music/AlbumArt/André Antunes, Shan Padman - Sanson Ki Mala Pe - Cover.jpg",
    "file": "http://localhost:3000/music/André Antunes, Shan Padman - Sanson Ki Mala Pe - Cover.mp3",
    "rating": 5
  },
  {
    "id": 139,
    "title": "Satranga (From \"ANIMAL\")",
    "artist": [
      "Arijit Singh",
      "Shreyas Puranik",
      "Siddharth - Garima"
    ],
    "album": "Satranga (From \"ANIMAL\")",
    "genre": "Hindi Pop",
    "year": 2023,
    "length": 271,
    "albumArt": "http://localhost:3000/music/AlbumArt/Arijit Singh, Shreyas Puranik, Siddharth - Garima - Satranga (From 'ANIMAL').jpg",
    "file": "http://localhost:3000/music/Arijit Singh, Shreyas Puranik, Siddharth - Garima - Satranga (From 'ANIMAL').mp3",
    "rating": 5
  },
  {
    "id": 140,
    "title": "Sau Tarah Ke",
    "artist": [
      "Pritam",
      "Jonita Gandhi",
      "Amit Mishra",
      "Kumaar",
      "Ashish Pandit"
    ],
    "album": "Dishoom",
    "genre": "Bollywood",
    "year": 2016,
    "length": 239,
    "albumArt": "http://localhost:3000/music/AlbumArt/Pritam, Jonita Gandhi, Amit Mishra, Kumaar, Ashish Pandit - Sau Tarah Ke.jpg",
    "file": "http://localhost:3000/music/Pritam, Jonita Gandhi, Amit Mishra, Kumaar, Ashish Pandit - Sau Tarah Ke.mp3",
    "rating": 5
  },
  {
    "id": 141,
    "title": "Saware (From \"Phantom\")",
    "artist": [
      "Arijit Singh"
    ],
    "album": "Ultimate Love Songs - Arijit Singh",
    "genre": "Hindi Pop",
    "year": 2020,
    "length": 321,
    "albumArt": "http://localhost:3000/music/AlbumArt/Arijit Singh - Saware (From 'Phantom').jpg",
    "file": "http://localhost:3000/music/Arijit Singh - Saware (From 'Phantom').mp3",
    "rating": 5
  },
  {
    "id": 142,
    "title": "Sea Shanty Medley",
    "artist": [
      "Home Free"
    ],
    "album": "Sea Shanty Medley",
    "genre": "Sea Shanties",
    "year": 2021,
    "length": 234,
    "albumArt": "http://localhost:3000/music/AlbumArt/Home Free - Sea Shanty Medley.jpg",
    "file": "http://localhost:3000/music/Home Free - Sea Shanty Medley.mp3",
    "rating": 5
  },
  {
    "id": 143,
    "title": "Shape of You",
    "artist": [
      "Ed Sheeran"
    ],
    "album": "÷ (Deluxe)",
    "genre": "Soft Pop",
    "year": 2017,
    "length": 233,
    "albumArt": "http://localhost:3000/music/AlbumArt/Ed Sheeran - Shape of You.jpg",
    "file": "http://localhost:3000/music/Ed Sheeran - Shape of You.mp3",
    "rating": 5
  },
  {
    "id": 144,
    "title": "Simroon Tera Naam (From \"Yaariyan 2\")",
    "artist": [
      "Manan Bhardwaj",
      "Sachet Tandon",
      "Nusrat Fateh Ali Khan"
    ],
    "album": "Simroon Tera Naam (From \"Yaariyan 2\")",
    "genre": "Bhajan",
    "year": 2023,
    "length": 258,
    "albumArt": "http://localhost:3000/music/AlbumArt/Manan Bhardwaj, Sachet Tandon, Nusrat Fateh Ali Khan - Simroon Tera Naam (From 'Yaariyan 2').jpg",
    "file": "http://localhost:3000/music/Manan Bhardwaj, Sachet Tandon, Nusrat Fateh Ali Khan - Simroon Tera Naam (From 'Yaariyan 2').mp3",
    "rating": 5
  },
  {
    "id": 145,
    "title": "Soch Na Sake",
    "artist": [
      "Amaal Mallik",
      "Arijit Singh",
      "Tulsi Kumar"
    ],
    "album": "Airlift",
    "genre": "Bollywood",
    "year": 2015,
    "length": 281,
    "albumArt": "http://localhost:3000/music/AlbumArt/Amaal Mallik, Arijit Singh, Tulsi Kumar - Soch Na Sake.jpg",
    "file": "http://localhost:3000/music/Amaal Mallik, Arijit Singh, Tulsi Kumar - Soch Na Sake.mp3",
    "rating": 5
  },
  {
    "id": 146,
    "title": "Sooraj Ki Baahon Mein",
    "artist": [
      "Dominique Cerejo",
      "Clinton Cerejo",
      "Loy Mendonsa"
    ],
    "album": "Zindagi Na Milegi Dobara",
    "genre": "Bollywood",
    "year": 2011,
    "length": 202,
    "albumArt": "http://localhost:3000/music/AlbumArt/Dominique Cerejo, Clinton Cerejo, Loy Mendonsa - Sooraj Ki Baahon Mein.jpg",
    "file": "http://localhost:3000/music/Dominique Cerejo, Clinton Cerejo, Loy Mendonsa - Sooraj Ki Baahon Mein.mp3",
    "rating": 5
  },
  {
    "id": 147,
    "title": "Stereo Hearts (feat. Adam Levine)",
    "artist": [
      "Gym Class Heroes",
      "Adam Levine"
    ],
    "album": "The Papercut Chronicles II",
    "genre": "",
    "year": 2011,
    "length": 210,
    "albumArt": "http://localhost:3000/music/AlbumArt/Gym Class Heroes, Adam Levine - Stereo Hearts (feat. Adam Levine).jpg",
    "file": "http://localhost:3000/music/Gym Class Heroes, Adam Levine - Stereo Hearts (feat. Adam Levine).mp3",
    "rating": 5
  },
  {
    "id": 148,
    "title": "Stronger",
    "artist": [
      "TheFatRat",
      "Slaydit",
      "Anjulie"
    ],
    "album": "Stronger",
    "genre": "",
    "year": 2019,
    "length": 205,
    "albumArt": "http://localhost:3000/music/AlbumArt/TheFatRat, Slaydit, Anjulie - Stronger.jpg",
    "file": "http://localhost:3000/music/TheFatRat, Slaydit, Anjulie - Stronger.mp3",
    "rating": 5
  },
  {
    "id": 149,
    "title": "Sunflower - Spider-Man: Into the Spider-Verse",
    "artist": [
      "Post Malone",
      "Swae Lee"
    ],
    "album": "Spider-Man: Into the Spider-Verse (Soundtrack From & Inspired by the Motion Picture)",
    "genre": "",
    "year": 2018,
    "length": 158,
    "albumArt": "http://localhost:3000/music/AlbumArt/Post Malone, Swae Lee - Sunflower - Spider-Man- Into the Spider-Verse.jpg",
    "file": "http://localhost:3000/music/Post Malone, Swae Lee - Sunflower - Spider-Man- Into the Spider-Verse.mp3",
    "rating": 5
  },
  {
    "id": 150,
    "title": "Suniyan Suniyan",
    "artist": [
      "Juss",
      "MixSingh"
    ],
    "album": "Suniyan Suniyan",
    "genre": "Punjabi Pop",
    "year": 2024,
    "length": 197,
    "albumArt": "http://localhost:3000/music/AlbumArt/Juss, MixSingh - Suniyan Suniyan.jpg",
    "file": "http://localhost:3000/music/Juss, MixSingh - Suniyan Suniyan.mp3",
    "rating": 5
  },
  {
    "id": 151,
    "title": "Sunn Raha Hai (Male Version)",
    "artist": [
      "Ankit Tiwari"
    ],
    "album": "Aashiqui 2",
    "genre": "Bollywood",
    "year": 2013,
    "length": 390,
    "albumArt": "http://localhost:3000/music/AlbumArt/Ankit Tiwari - Sunn Raha Hai (Male Version).jpg",
    "file": "http://localhost:3000/music/Ankit Tiwari - Sunn Raha Hai (Male Version).mp3",
    "rating": 5
  },
  {
    "id": 152,
    "title": "Taarif Karoon",
    "artist": [
      "Mohammed Rafi",
      "Sanam"
    ],
    "album": "Sanam - Taarif Karoon",
    "genre": "Ghazal",
    "year": 2019,
    "length": 157,
    "albumArt": "http://localhost:3000/music/AlbumArt/Mohammed Rafi, Sanam - Taarif Karoon.jpg",
    "file": "http://localhost:3000/music/Mohammed Rafi, Sanam - Taarif Karoon.mp3",
    "rating": 5
  },
  {
    "id": 153,
    "title": "Tera Ghata",
    "artist": [
      "Gajendra Verma"
    ],
    "album": "Tera Ghata",
    "genre": "Hindi Pop",
    "year": 2018,
    "length": 254,
    "albumArt": "http://localhost:3000/music/AlbumArt/Gajendra Verma - Tera Ghata.jpg",
    "file": "http://localhost:3000/music/Gajendra Verma - Tera Ghata.mp3",
    "rating": 5
  },
  {
    "id": 154,
    "title": "Tera Hone Laga Hoon",
    "artist": [
      "Atif Aslam",
      "Alisha Chinai",
      "Pritam"
    ],
    "album": "Ajab Prem Ki Ghazab Kahani (Original Motion Picture Soundtrack)",
    "genre": "Bollywood",
    "year": 2009,
    "length": 299,
    "albumArt": "http://localhost:3000/music/AlbumArt/Atif Aslam, Alisha Chinai, Pritam - Tera Hone Laga Hoon.jpg",
    "file": "http://localhost:3000/music/Atif Aslam, Alisha Chinai, Pritam - Tera Hone Laga Hoon.mp3",
    "rating": 5
  },
  {
    "id": 155,
    "title": "Tere Pyaar Mein",
    "artist": [
      "Pritam",
      "Arijit Singh",
      "Amitabh Bhattacharya",
      "Nikhita Gandhi"
    ],
    "album": "Tere Pyaar Mein (From \"Tu Jhoothi Main Makkaar\")",
    "genre": "Bollywood",
    "year": 2023,
    "length": 266,
    "albumArt": "http://localhost:3000/music/AlbumArt/Pritam, Arijit Singh, Amitabh Bhattacharya, Nikhita Gandhi - Tere Pyaar Mein.jpg",
    "file": "http://localhost:3000/music/Pritam, Arijit Singh, Amitabh Bhattacharya, Nikhita Gandhi - Tere Pyaar Mein.mp3",
    "rating": 5
  },
  {
    "id": 156,
    "title": "Tere Sang Yaara",
    "artist": [
      "Atif Aslam",
      "Manoj Muntashir"
    ],
    "album": "Rustom (Original Motion Picture Soundtrack)",
    "genre": "Bollywood",
    "year": 2016,
    "length": 286,
    "albumArt": "http://localhost:3000/music/AlbumArt/Atif Aslam, Manoj Muntashir - Tere Sang Yaara.jpg",
    "file": "http://localhost:3000/music/Atif Aslam, Manoj Muntashir - Tere Sang Yaara.mp3",
    "rating": 5
  },
  {
    "id": 157,
    "title": "Tere Vaaste (From \"Zara Hatke Zara Bachke\")",
    "artist": [
      "Varun Jain",
      "Sachin-Jigar",
      "Shadab Faridi",
      "Altamash Faridi",
      "Amitabh Bhattacharya"
    ],
    "album": "Tere Vaaste (From \"Zara Hatke Zara Bachke\")",
    "genre": "Hindi Pop",
    "year": 2023,
    "length": 189,
    "albumArt": "http://localhost:3000/music/AlbumArt/Varun Jain, Sachin-Jigar, Shadab Faridi, Altamash Faridi, Amitabh Bhattacharya - Tere Vaaste (From 'Zara Hatke Zara Bachke').jpg",
    "file": "http://localhost:3000/music/Varun Jain, Sachin-Jigar, Shadab Faridi, Altamash Faridi, Amitabh Bhattacharya - Tere Vaaste (From 'Zara Hatke Zara Bachke').mp3",
    "rating": 5
  },
  {
    "id": 158,
    "title": "Teri Khair Mangdi",
    "artist": [
      "Bilal Saeed",
      "Kumaar"
    ],
    "album": "Baar Baar Dekho (Original Motion Picture Soundtrack)",
    "genre": "Punjabi Pop",
    "year": 2016,
    "length": 225,
    "albumArt": "http://localhost:3000/music/AlbumArt/Bilal Saeed, Kumaar - Teri Khair Mangdi.jpg",
    "file": "http://localhost:3000/music/Bilal Saeed, Kumaar - Teri Khair Mangdi.mp3",
    "rating": 5
  },
  {
    "id": 159,
    "title": "Teri Meri Kahaani",
    "artist": [
      "Palak Muchhal",
      "Manoj Yadav",
      "Arijit Singh"
    ],
    "album": "Best Of Palak Muchhal",
    "genre": "Bollywood",
    "year": 2024,
    "length": 331,
    "albumArt": "http://localhost:3000/music/AlbumArt/Palak Muchhal, Manoj Yadav, Arijit Singh - Teri Meri Kahaani.jpg",
    "file": "http://localhost:3000/music/Palak Muchhal, Manoj Yadav, Arijit Singh - Teri Meri Kahaani.mp3",
    "rating": 5
  },
  {
    "id": 160,
    "title": "Thoda Thoda Pyaar",
    "artist": [
      "Nilesh Ahuja",
      "Kumaar",
      "Stebin Ben"
    ],
    "album": "Thoda Thoda Pyaar",
    "genre": "Hindi Pop",
    "year": 2021,
    "length": 244,
    "albumArt": "http://localhost:3000/music/AlbumArt/Nilesh Ahuja, Kumaar, Stebin Ben - Thoda Thoda Pyaar.jpg",
    "file": "http://localhost:3000/music/Nilesh Ahuja, Kumaar, Stebin Ben - Thoda Thoda Pyaar.mp3",
    "rating": 5
  },
  {
    "id": 161,
    "title": "Thodi Jagah (From \"Marjaavaan\")",
    "artist": [
      "Arijit Singh",
      "Tanishk Bagchi",
      "Rashmi Virag"
    ],
    "album": "Thodi Jagah (From \"Marjaavaan\")",
    "genre": "Hindi Pop",
    "year": 2019,
    "length": 218,
    "albumArt": "http://localhost:3000/music/AlbumArt/Arijit Singh, Tanishk Bagchi, Rashmi Virag - Thodi Jagah (From 'Marjaavaan').jpg",
    "file": "http://localhost:3000/music/Arijit Singh, Tanishk Bagchi, Rashmi Virag - Thodi Jagah (From 'Marjaavaan').mp3",
    "rating": 5
  },
  {
    "id": 162,
    "title": "Thunder",
    "artist": [
      "Imagine Dragons"
    ],
    "album": "Evolve",
    "genre": "",
    "year": 2017,
    "length": 187,
    "albumArt": "http://localhost:3000/music/AlbumArt/Imagine Dragons - Thunder.jpg",
    "file": "http://localhost:3000/music/Imagine Dragons - Thunder.mp3",
    "rating": 5
  },
  {
    "id": 163,
    "title": "Time Back",
    "artist": [
      "Xvnty"
    ],
    "album": "Time Back",
    "genre": "",
    "year": 2021,
    "length": 165,
    "albumArt": "http://localhost:3000/music/AlbumArt/Xvnty - Time Back.jpg",
    "file": "http://localhost:3000/music/Xvnty - Time Back.mp3",
    "rating": 5
  },
  {
    "id": 164,
    "title": "Time Back(Instrumental)",
    "artist": [
      "Bad Style, Tupac Shakur"
    ],
    "album": "",
    "genre": "",
    "year": 2020,
    "length": 245,
    "albumArt": "http://localhost:3000/music/AlbumArt/default.jpg",
    "file": "http://localhost:3000/music/Time Back (Instumental Version) [gBT5Cf2Ct74].mp3",
    "rating": 5
  },
  {
    "id": 165,
    "title": "Toxic",
    "artist": [
      "BoyWithUke"
    ],
    "album": "Toxic",
    "genre": "",
    "year": 2021,
    "length": 168,
    "albumArt": "http://localhost:3000/music/AlbumArt/BoyWithUke - Toxic.jpg",
    "file": "http://localhost:3000/music/BoyWithUke - Toxic.mp3",
    "rating": 5
  },
  {
    "id": 166,
    "title": "Tu Hi Haqeeqat",
    "artist": [
      "Pritam",
      "Javed Ali",
      "Irshan Ashraf",
      "Shadab"
    ],
    "album": "Tum Mile (Original Motion Picture Soundtrack)",
    "genre": "Bollywood",
    "year": 2009,
    "length": 302,
    "albumArt": "http://localhost:3000/music/AlbumArt/Pritam, Javed Ali, Irshan Ashraf, Shadab - Tu Hi Haqeeqat.jpg",
    "file": "http://localhost:3000/music/Pritam, Javed Ali, Irshan Ashraf, Shadab - Tu Hi Haqeeqat.mp3",
    "rating": 5
  },
  {
    "id": 167,
    "title": "Tujhe Kitna Chahne Lage (From \"Kabir Singh\")",
    "artist": [
      "Arijit Singh",
      "Mithoon"
    ],
    "album": "Tujhe Kitna Chahne Lage (From \"Kabir Singh\")",
    "genre": "Hindi Pop",
    "year": 2019,
    "length": 284,
    "albumArt": "http://localhost:3000/music/AlbumArt/Arijit Singh, Mithoon - Tujhe Kitna Chahne Lage (From 'Kabir Singh').jpg",
    "file": "http://localhost:3000/music/Arijit Singh, Mithoon - Tujhe Kitna Chahne Lage (From 'Kabir Singh').mp3",
    "rating": 5
  },
  {
    "id": 168,
    "title": "Tujhse Naraz Nahi Zindagi",
    "artist": [
      "Sanam",
      "R. D. Burman"
    ],
    "album": "Tujhse Naraz Nahi Zindagi - Sanam",
    "genre": "Hindi Pop",
    "year": 2014,
    "length": 237,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sanam, R. D. Burman - Tujhse Naraz Nahi Zindagi.jpg",
    "file": "http://localhost:3000/music/Sanam, R. D. Burman - Tujhse Naraz Nahi Zindagi.mp3",
    "rating": 5
  },
  {
    "id": 169,
    "title": "Tum Hi Aana (From \"Marjaavaan\")",
    "artist": [
      "Payal Dev",
      "Jubin Nautiyal",
      "Kunaal Vermaa"
    ],
    "album": "Tum Hi Aana (From \"Marjaavaan\")",
    "genre": "Bhajan",
    "year": 2019,
    "length": 249,
    "albumArt": "http://localhost:3000/music/AlbumArt/Payal Dev, Jubin Nautiyal, Kunaal Vermaa - Tum Hi Aana (From 'Marjaavaan').jpg",
    "file": "http://localhost:3000/music/Payal Dev, Jubin Nautiyal, Kunaal Vermaa - Tum Hi Aana (From 'Marjaavaan').mp3",
    "rating": 5
  },
  {
    "id": 170,
    "title": "Tum Hi Ho",
    "artist": [
      "Mithoon",
      "Arijit Singh"
    ],
    "album": "Aashiqui 2",
    "genre": "Bollywood",
    "year": 2013,
    "length": 262,
    "albumArt": "http://localhost:3000/music/AlbumArt/Mithoon, Arijit Singh - Tum Hi Ho.jpg",
    "file": "http://localhost:3000/music/Mithoon, Arijit Singh - Tum Hi Ho.mp3",
    "rating": 5
  },
  {
    "id": 171,
    "title": "Tum Se (From \"Teri Baaton Mein Aisa Uljha Jiya\")",
    "artist": [
      "Sachin-Jigar",
      "Raghav Chaitanya",
      "Varun Jain",
      "Indraneel"
    ],
    "album": "Tum Se (From \"Teri Baaton Mein Aisa Uljha Jiya\")",
    "genre": "Gujarati Pop",
    "year": 2024,
    "length": 264,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sachin-Jigar, Raghav Chaitanya, Varun Jain, Indraneel - Tum Se (From 'Teri Baaton Mein Aisa Uljha Jiya').jpg",
    "file": "http://localhost:3000/music/Sachin-Jigar, Raghav Chaitanya, Varun Jain, Indraneel - Tum Se (From 'Teri Baaton Mein Aisa Uljha Jiya').mp3",
    "rating": 5
  },
  {
    "id": 172,
    "title": "Unholy (feat. Kim Petras)",
    "artist": [
      "Sam Smith",
      "Kim Petras"
    ],
    "album": "Unholy (feat. Kim Petras)",
    "genre": "Soft Pop",
    "year": 2022,
    "length": 157,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sam Smith, Kim Petras - Unholy (feat. Kim Petras).jpg",
    "file": "http://localhost:3000/music/Sam Smith, Kim Petras - Unholy (feat. Kim Petras).mp3",
    "rating": 5
  },
  {
    "id": 173,
    "title": "Ve Kamleya (From \"Rocky Aur Rani Kii Prem Kahaani\")",
    "artist": [
      "Pritam",
      "Arijit Singh",
      "Shreya Ghoshal",
      "Shadab Faridi",
      "Altamash Faridi",
      "Amitabh Bhattacharya"
    ],
    "album": "Rocky Aur Rani Kii Prem Kahaani",
    "genre": "Bollywood",
    "year": 2024,
    "length": 247,
    "albumArt": "http://localhost:3000/music/AlbumArt/Pritam, Arijit Singh, Shreya Ghoshal, Shadab Faridi, Altamash Faridi, Amitabh Bhattacharya - Ve Kamleya (From 'Rocky Aur Rani Kii Prem Kahaani').jpg",
    "file": "http://localhost:3000/music/Pritam, Arijit Singh, Shreya Ghoshal, Shadab Faridi, Altamash Faridi, Amitabh Bhattacharya - Ve Kamleya (From 'Rocky Aur Rani Kii Prem Kahaani').mp3",
    "rating": 5
  },
  {
    "id": 174,
    "title": "Wellerman - Sea Shanty",
    "artist": [
      "Nathan Evans"
    ],
    "album": "Wellerman (Sea Shanty)",
    "genre": "Sea Shanties",
    "year": 2021,
    "length": 156,
    "albumArt": "http://localhost:3000/music/AlbumArt/Nathan Evans - Wellerman - Sea Shanty.jpg",
    "file": "http://localhost:3000/music/Nathan Evans - Wellerman - Sea Shanty.mp3",
    "rating": 5
  },
  {
    "id": 175,
    "title": "World's Smallest Violin",
    "artist": [
      "AJR"
    ],
    "album": "OK ORCHESTRA",
    "genre": "",
    "year": 2021,
    "length": 180,
    "albumArt": "http://localhost:3000/music/AlbumArt/AJR - World's Smallest Violin.jpg",
    "file": "http://localhost:3000/music/AJR - World's Smallest Violin.mp3",
    "rating": 5
  },
  {
    "id": 176,
    "title": "Yeh Raaten Yeh Mausam",
    "artist": [
      "Sanam",
      "Simran Sehgal"
    ],
    "album": "Yeh Raaten Yeh Mausam - Sanam And Simran Shgal",
    "genre": "Hindi Pop",
    "year": 2014,
    "length": 208,
    "albumArt": "http://localhost:3000/music/AlbumArt/Sanam, Simran Sehgal - Yeh Raaten Yeh Mausam.jpg",
    "file": "http://localhost:3000/music/Sanam, Simran Sehgal - Yeh Raaten Yeh Mausam.mp3",
    "rating": 5
  },
  {
    "id": 177,
    "title": "Yeh Vaada Raha - Tu Tu Hai Wahi / From “Yeh Vaada Raha”",
    "artist": [
      "Kishore Kumar",
      "Asha Bhosle",
      "R. D. Burman"
    ],
    "album": "Kishore Kumar's Golden Voice",
    "genre": "Ghazal",
    "year": 2023,
    "length": 407,
    "albumArt": "http://localhost:3000/music/AlbumArt/Kishore Kumar, Asha Bhosle, R. D. Burman - Yeh Vaada Raha - Tu Tu Hai Wahi  From “Yeh Vaada Raha”.jpg",
    "file": "http://localhost:3000/music/Kishore Kumar, Asha Bhosle, R. D. Burman - Yeh Vaada Raha - Tu Tu Hai Wahi  From “Yeh Vaada Raha”.mp3",
    "rating": 5
  },
  {
    "id": 178,
    "title": "Zaroorat",
    "artist": [
      "Mustafa Zahid"
    ],
    "album": "Ek Villain",
    "genre": "Bollywood",
    "year": 2014,
    "length": 368,
    "albumArt": "http://localhost:3000/music/AlbumArt/Mustafa Zahid - Zaroorat.jpg",
    "file": "http://localhost:3000/music/Mustafa Zahid - Zaroorat.mp3",
    "rating": 5
  },
  {
    "id": 179,
    "title": "Матушка",
    "artist": [
      "Татьяна Куртукова"
    ],
    "album": "Матушка",
    "genre": "",
    "year": 2022,
    "length": 173,
    "albumArt": "http://localhost:3000/music/AlbumArt/Татьяна Куртукова - Матушка.jpg",
    "file": "http://localhost:3000/music/Татьяна Куртукова - Матушка.mp3",
    "rating": 5
  }
];