const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Agar Tum Sath Ho",
      artist: "Arjit Singh",
      song: "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/songs%2FAgar_Tum_Saath_Ho_lyrics__Tamasha___Ranbir_Kapoor%2C_Deepika_Padukone(128k).m4a?alt=media&token=37d9bdcb-4a76-41d6-8523-aad9e10ed051",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/images%2FAgar-Tum-Saath-Ho-From-Tamasha--English-2019-20200106215945-500x500.jpg?alt=media&token=9825cb0c-5984-4f1d-b704-4387d96032ed",
    },
    {
      id: 2,
      favourite: false,
      songName: "Deva deva",
      artist: "Arjit Singh",
      song: "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/songs%2FDeva_Deva_-_Film_Version__Brahm%C4%81stra__Amitabh_B_Ranbir__%40aliabhatt__Pritam_Arijit(128k).m4a?alt=media&token=a4557250-c184-49db-961b-9597f91076f8",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/images%2FRanbir-Kapoor-and-Alia-Bhatt.jpg?alt=media&token=79be9c34-f112-4410-a606-a7ceac3c825a",
    },
    {
      id: 3,
      favourite: false,
      songName: "Kalank-Title track",
      artist: "Arjit Singh",
      song: "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/songs%2FKalank_Title_Track_-_Lyrics___Kalank___Arijit_Singh___Alia_Bhatt%2C_Varun_Dhawan___Pritam___Amitabh(128k).m4a?alt=media&token=90f1f05d-9e8a-4331-8784-9c1e9a9c2716",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/images%2Fmaxresdefault%20(4).jpg?alt=media&token=4597749f-826a-4eef-8713-b6f2947b18d1",
    },
    {
      id: 4,
      favourite: false,
      songName: "Kesariya",
      artist: "Arjit Singh",
      song: "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/songs%2FKesariya_-_Film_Version___Brahm%C4%81stra___Ranbir___Alia___Pritam___Arijit___Amitabh(128k).m4a?alt=media&token=cbc14168-1356-44dd-baef-05211e1bbfc7",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/images%2FKesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg?alt=media&token=ba0ef107-5f87-48fe-aa97-5d94ba11ca46",
    },
    {
      id: 5,
      favourite: false,
      songName: "Tum Hi Ho",
      artist: "Arjit Singh",
      song: "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/arjitSingh_songs%2F_Tum_Hi_Ho__Aashiqui_2_Full_Song_With_Lyrics___Aditya_Roy_Kapur%2C_Shraddha_Kapoor(128k).m4a?alt=media&token=96a275a9-0388-4d6f-ac60-35d18eef137f",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/images%2Fmaxresdefault%20(5).jpg?alt=media&token=d3d96552-730d-47a1-9a7c-11180287b22d",
    },
    {
      id: 6,
      favourite: false,
      songName: "Kehvu Ghanu Ghanu Che",
      artist: "Parthiv Gohil",
      song: "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/songs%2FKehvu_Ghanu_Ghanu_Che_-_4K_Video_Song___Chhello_Divas__Gujarati_Movie____Yash_Soni%2C_Janki_Bodiwala(128k).m4a?alt=media&token=7a40f176-3abb-4e5b-a3a2-4406d12f439f",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/images%2FKehvu-Ghanu-Single-Gujarati-2015-20200106164730-500x500.jpg?alt=media&token=fc9e8aee-3ac1-4b6b-ada3-1abb58a28743",
    },
    {
      id: 7,
      favourite: false,
      songName: "Aise Kyun (Mismatched)",
      artist:"Raghav Chaitanya, Nikhita Gandhi",
      song: "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/songs%2FAise_Kyun_Official_Lyric_Video___Rekha_Bhardwaj%2C_Anurag_Saikia%2C_Raj_Shekhar___Mismatched_Season_2(128k).m4a?alt=media&token=89e8f715-1af5-42bd-a0a7-30855070ab9b",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/images%2Fmaxresdefault%20(6).jpg?alt=media&token=d2ea8dac-b5cd-45c1-bcec-2a99be2c247a",
    },
    {
      id: 8,
      favourite: false,
      songName: "Tu Chale",
      artist:"Arjit Singh,Shreya Ghoshal",
      song: "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/songs%2FX2Download.app%20-%20'Tu%20Chale'%20FULL%20VIDEO%20Song%20_%20'_'%20_%20Shankar%2C%20Chiyaan%20Vikram%20_%20Arijit%20Singh%20_%20A.R%20Rahman%20(128%20kbps).m4a?alt=media&token=fb593b53-600e-4fcf-8bc9-5d7c10a65bca",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/images%2Fmaxresdefault%20(7).jpg?alt=media&token=c08aadc2-e288-4c01-a270-6c6c8c3606a0",
    },
    {
      id: 9,
      favourite: false,
      songName: "Banjaara",
      artist:"Mohammed Irfan",
      song: "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/songs%2FX2Download.app%20-%20Banjaara%20Full%20Video%20Song%20_%20Ek%20Villain%20_%20Shraddha%20Kapoor%2C%20Siddharth%20Malhotra%20(128%20kbps).m4a?alt=media&token=a7a5e791-f4a4-4dfd-83c0-2b10eea91491",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/images%2FEk-Villain-Hindi-2014-500x500.jpg?alt=media&token=cd089f66-c346-4135-b10a-4cb4d43e30fe",
    },
    {
      id: 10,
      favourite: false,
      songName: "Chahun Main Ya Naa",
      artist:" Arijit Singh,Palak Muchhal",
      song: "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/songs%2FX2Download.app%20-%20Chahun%20Main%20Ya%20Naa%20Full%20Video%20Song%20Aashiqui%202%20_%20Aditya%20Roy%20Kapur%2C%20Shraddha%20Kapoor%20(128%20kbps).m4a?alt=media&token=3ef4702d-8b80-40cd-8074-1764bcf2eb22",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/images%2F8769f572-b5fc-49b9-b529-5d6e887f0574_1024%20(1).jpg?alt=media&token=b52b8ea8-47d5-437c-aad7-0deeb4f2b517",
    },
    {
      id: 11,
      favourite: false,
      songName: "Dil Meri Na Sune",
      artist:"Atif Aslam",
      song: "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/songs%2FX2Download.app%20-%20Dil%20Meri%20Na%20Sune%20Lyrical%20-%20Genius%20_%20Utkarsh%2C%20Ishita%20_%20Atif%20Aslam%20_%20Himesh%20Reshammiya%20_%20Manoj%20(128%20kbps).m4a?alt=media&token=09e7610d-c4e9-4d4f-b8ef-f539f329c030",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/images%2FDil-Meri-Na-Sune-From-Genius--Hindi-2018-20191216191847-500x500.jpg?alt=media&token=a13a263f-d6b5-46f1-8732-64b02da00cc9",
    },
    {
      id: 12,
      favourite: false,
      songName: "Perfect",
      artist:"Ed Sheeran",
      song: "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/songs%2FX2Download.app%20-%20Ed%20Sheeran%20-%20Perfect%20(Lyrics)%20(128%20kbps).m4a?alt=media&token=d1092f2d-9902-4f15-aafd-1c2825e1c080",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/images%2Fhqdefault.jpg?alt=media&token=741f56a3-5755-494c-a244-93adaaf86be8",
    },
    {
      id: 13,
      favourite: false,
      songName: "Main Rahoon Ya Na Rahoon",
      artist:"Armaan Malik",
      song: "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/songs%2FX2Download.app%20-%20Main%20Rahoon%20Ya%20Na%20Rahoon%20Full%20AUDIO%20Song%20_%20Emraan%20Hashmi%2C%20Esha%20Gupta%20_%20Amaal%20Mallik%2C%20Armaan%20Malik%20(128%20kbps).m4a?alt=media&token=2630e216-8bcc-4178-87c0-10148606f6d3",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/images%2FMain-Rahoon-Ya-Na-Rahoon-Hindi-2015-500x500.jpg?alt=media&token=b2da7c0b-e099-4ad1-8885-0b4938a565df",
    },
    {
      id: 14,
      favourite: false,
      songName: "O Khuda",
      artist:"Amaal Mallik, Palak Muchhal",
      song: "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/songs%2FX2Download.app%20-%20O%20Khuda%20Full%20Song%20with%20LYRICS%20_%20Hero%20_%20Sooraj%20Pancholi%2C%20Athiya%20Shetty%20_%20Amaal%20Mallik%20_%20T-Series%20(128%20kbps).m4a?alt=media&token=7e8d763b-be12-453c-b760-7968c833e473",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/musicmingle-6db3a.appspot.com/o/images%2Fo-khuda-hero.jpg?alt=media&token=5cbdc59d-e13a-482a-a488-e57106a3ed79",
    },
    
  ];
  
  export default Songs;