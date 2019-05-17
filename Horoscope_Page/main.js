var horoscope=[
  {
    sign: "Aries",
    text: "March 21 - April 19: Aries is the first sign of the zodiac. Those who are Aries are independent and courageous. They enjoy leading others and bringing excitement into the lives of others. An Aries is enthusiastic and very goal-oriented."
  },
  {
    sign: "Taurus",
    text: "April 20 - May 20: The second sign of the zodiac, those who are a Taurus are solid and fight for what they want. A Taurus is very easy going but can also be stubborn. A Taurus can be procrastinators but also have a good-work ethic."
  },
  {
    sign: "Gemini",
    text: "May 21 - June 20: Gemini is the third sign of the zodiac. Geminis have many sides and are known for their energy. They are very talkative and are considered social butterflies. A Gemini will always take their lives in the direction they want to go."
  },
  {
    sign: "Cancer",
    text: "June 21 - July 22: Cancer is the fourth sign of the zodiac. This sign is marked by inconsistency. They enjoy security but also seek adventure. A Cancer is not very predictable and always keep others guessing."
  },
  {
    sign: "Leo",
    text: "July 23 - August 22: Leo is the fifth sign in the zodiac. Leos have high self esteem and are very devoted. They are also very kind and generous. A Leo is known for being hot tempered yet forgiving"
  },
  {
    sign: "Virgo",
    text: "August 23 - September 22: The sixth sign of the zodiac, Virgo is very mind oriented. They are constantly analyzing and thinking. They enjoy bettering themselves and those around them"
  },
  {
    sign: "Libra",
    text: "September 23 - October 22: The seventh sign of the zodiac, Libras are known for their diplomatic nature. They get along well with everyone and are ambitious. They have very expensive taste and work hard to make money. "
  },
  {
    sign: "Scorpio",
    text: "October 23 - November 2: The eight sign of the zodiac, Scorpios are very intense. They like to question everything and work hard at making sense of things. Scorpios treat others with kindness and loyalty"
  },
  {
    sign: "Sagitarius",
    text: "November 22 - December 21: The ninth sign of the zodiac, a Sagittarius has a very positive outlook on life. They have vibrant personalities and enjoy meeting new people. They can also be reckless."
  },
  {
    sign: "Capricorn",
    text: "December 22 - January 19: The 10th sign of the zodiac, those who are Capricorns are marked by their ambitious nature. They have very active minds and always have to be in control of their lives."
  },
  {
    sign: "Aquarius",
    text: "January 20 - February 18: Aquarius is the 11th sign of the zodiac. Aquarians don't always care what others think about them. They take each opportunity they have and work towards formulating new ideas. "
  },
  {
    sign: "Pisces",
    text: "February 19 - March 20: Pisces is the 12th and last sign of the zodiac. Those who are Pisces are extremely sensitive and reserved. They like to escape from reality. A Pisces is a very good listener and friend." 
  },
  {
    sign: "Unknown",
    text: "Use the search bar on the homepage to determine your sign!" 
  }
  ]
  
  console.log(horoscope[1].text)
  
  function horoscopeMe(){
  var mySign = document.getElementById("mySign").value.toLowerCase()
  console.log(mySign)
  var signInfo = document.getElementById("signInfo")
  var zodiac = document.getElementById("zodiac")
  for(i=0;i<horoscope.length;i++){
    switch (mySign) {
    case "aries":
      var n =0
      break;
    case "taurus":
      var n =1
      break;
    case "gemini":
      var n =2
      break;
    case "cancer":
      var n =3
      break;
    case "leo":
      var n =4
      break;
      case "virgo":
      var n =5
      break;
      case "libra":
      var n =6
      break;
      case "scorpio":
      var n =7
      break;
      case "sagittarius":
      var n =8
      break;
      case "capricorn":
      var n =9
      break;
      case "aquarius":
      var n =10
      break;
      case "pisces":
      var n =11
      break;
    default:
      var n =12
  }
      console.log(n)
      signInfo.innerHTML= horoscope[n].text
      zodiac.innerHTML = horoscope[n].sign.toUpperCase()
      document.getElementById("mySign").value = ""
    }
  }
  
  