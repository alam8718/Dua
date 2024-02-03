const subCategoriesData = [
  {
      "id": 1,
      "cat_id": 1,
      "subcat_id": 1,
      "subcat_name_bn": "বান্দা তার রবের মুখাপেক্ষী",
      "subcat_name_en": "The servant is dependent on his Lord",
      "no_of_dua": 3
  },
  {
      "id": 2,
      "cat_id": 1,
      "subcat_id": 2,
      "subcat_name_bn": "আল্লাহ্‌র কাছে যে জিনিসটি চাওয়া সবচাইতে বেশি গুরুত্বপূর্ণ",
      "subcat_name_en": "The most important thing to ask Allah for",
      "no_of_dua": 9
  },
  {
      "id": 3,
      "cat_id": 1,
      "subcat_id": 3,
      "subcat_name_bn": "জান্নাত লাভ ও জাহান্নাম থেকে রেহাই",
      "subcat_name_en": "Ask for paradise & protection from fire",
      "no_of_dua": 2
  },
  {
      "id": 4,
      "cat_id": 1,
      "subcat_id": 4,
      "subcat_name_bn": "দ্বীনের উপর অটল থাকার দোয়া",
      "subcat_name_en": "Dua to remain steadfast on the religion",
      "no_of_dua": 3
  },
  {
      "id": 5,
      "cat_id": 1,
      "subcat_id": 5,
      "subcat_name_bn": "সকল কাজে উত্তম পরিণতির দোয়া",
      "subcat_name_en": "Dua of good outcome in all deeds",
      "no_of_dua": 1
  },
  {
      "id": 6,
      "cat_id": 1,
      "subcat_id": 6,
      "subcat_name_bn": "নিয়ামাত বা অনুগ্রহের প্রার্থনা",
      "subcat_name_en": "Seeking whatever good Allah can bestow",
      "no_of_dua": 2
  },
  {
      "id": 7,
      "cat_id": 1,
      "subcat_id": 7,
      "subcat_name_bn": "বিভীষিকা, দুর্দশা, মন্দ পরিণতি ও শত্রুর উল্লাস থেকে আশ্রয়",
      "subcat_name_en": "Shelter from horror, misery, evil consequences and rejoicing of the enemy",
      "no_of_dua": 1
  },
  {
      "id": 8,
      "cat_id": 2,
      "subcat_id": 8,
      "subcat_name_bn": "তাসবীহ, তাহমীদ, তাহলীল ও তাকবীর-এর ফযীলত",
      "subcat_name_en": "Excellence of doing Tasbeeh, Tahmid, Tahlil, Takbeer",
      "no_of_dua": 15
  },
  {
      "id": 9,
      "cat_id": 3,
      "subcat_id": 9,
      "subcat_name_bn": "দোয়া কবুলের সময় ও স্থান সমূহ",
      "subcat_name_en": "Times and places when dua will be accepted",
      "no_of_dua": 30
  },
  {
      "id": 10,
      "cat_id": 4,
      "subcat_id": 10,
      "subcat_name_bn": "যাদের দোয়া কবুল হয়",
      "subcat_name_en": "Those whose duas are accepted",
      "no_of_dua": 14
  },
  {
      "id": 11,
      "cat_id": 5,
      "subcat_id": 11,
      "subcat_name_bn": "সকাল-সন্ধ্যার যিক্‌রের ফযীলত",
      "subcat_name_en": "Excellence of dua in the morning & evening",
      "no_of_dua": 1
  },
  {
      "id": 12,
      "cat_id": 5,
      "subcat_id": 12,
      "subcat_name_bn": "সকাল-সন্ধ্যার যিক্‌র",
      "subcat_name_en": "Morning & Evening Adhkar",
      "no_of_dua": 45
  },
  {
      "id": 13,
      "cat_id": 5,
      "subcat_id": 13,
      "subcat_name_bn": "কর্মব্যস্ত অবস্থার যিক্‌র",
      "subcat_name_en": "Dhikr in busy state",
      "no_of_dua": 7
  },
  {
      "id": 14,
      "cat_id": 6,
      "subcat_id": 14,
      "subcat_name_bn": "ঘুমানোর আগে",
      "subcat_name_en": "Before sleep",
      "no_of_dua": 27
  },
  {
      "id": 15,
      "cat_id": 6,
      "subcat_id": 15,
      "subcat_name_bn": "ঘুম ভাঙার পরে",
      "subcat_name_en": "After waking up",
      "no_of_dua": 8
  },
  {
      "id": 16,
      "cat_id": 7,
      "subcat_id": 16,
      "subcat_name_bn": "কাপড় পরিধান সম্পর্কিত দোয়া সমূহ",
      "subcat_name_en": "Duas related to wearing clothes",
      "no_of_dua": 8
  },
  {
      "id": 17,
      "cat_id": 8,
      "subcat_id": 17,
      "subcat_name_bn": "বাড়ি থেকে বের হওয়া",
      "subcat_name_en": "When leaving the home",
      "no_of_dua": 3
  },
  {
      "id": 18,
      "cat_id": 8,
      "subcat_id": 18,
      "subcat_name_bn": "বাড়িতে প্রবেশ",
      "subcat_name_en": "Upon entering the home",
      "no_of_dua": 3
  },
  {
      "id": 19,
      "cat_id": 9,
      "subcat_id": 19,
      "subcat_name_bn": "টয়লেট সম্পর্কিত দোয়া সমূহ",
      "subcat_name_en": "Duas related to toilets",
      "no_of_dua": 2
  },
  {
      "id": 20,
      "cat_id": 10,
      "subcat_id": 20,
      "subcat_name_bn": "আযানের সময় যা বলতে হবে",
      "subcat_name_en": "Dua while hearing the adhaan",
      "no_of_dua": 2
  },
  {
      "id": 21,
      "cat_id": 10,
      "subcat_id": 21,
      "subcat_name_bn": "আযানের পরে যা বলতে হবে",
      "subcat_name_en": "Dua after the adhaan",
      "no_of_dua": 2
  },
  {
      "id": 22,
      "cat_id": 10,
      "subcat_id": 22,
      "subcat_name_bn": "আযান ও ইক্বামতের মধ্যবর্তী সময় দোয়া",
      "subcat_name_en": "Dua between Adhaan and Iqamah",
      "no_of_dua": 2
  },
  {
      "id": 23,
      "cat_id": 10,
      "subcat_id": 23,
      "subcat_name_bn": "ইমাম ও মুআযযিনের জন্য দোয়া",
      "subcat_name_en": "Dua for Imam and Mu'adhdhin",
      "no_of_dua": 1
  }
]

export default subCategoriesData;