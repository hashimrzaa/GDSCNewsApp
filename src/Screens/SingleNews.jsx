import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";

const data = [
  {
    id: 0,
    headline: "Scientists Make Breakthrough in Fusion Energy Research",
    source: "Science Today",
    date: "2024-03-10",
    category: "Science",
    summary:
      "Researchers at the Institute of Fusion Studies have achieved a significant milestone in the development of fusion energy. Their latest experiment demonstrated sustained plasma confinement for a record duration, paving the way for more efficient and reliable fusion reactors.",
  },
  {
    id: 1,
    headline: "Stock Market Surges to Record Highs",
    source: "Financial Gazette",
    date: "2024-03-10",
    category: "Finance",
    summary:
      "Investor optimism soared today as the stock market rallied to unprecedented heights. Analysts attribute the surge to positive economic indicators, strong corporate earnings, and hopes for fiscal stimulus measures.",
  },
  {
    id: 2,
    headline: "Political Unrest Escalates in Eastern Region",
    source: "Regional Times",
    date: "2024-03-10",
    category: "Politics",
    summary:
      "Tensions continue to rise in the Eastern region as clashes between rival factions intensify. Authorities have deployed additional security forces to maintain order, but concerns remain high over the potential for further violence.",
  },
  {
    id: 3,
    headline: "New Study Reveals Alarming Decline in Bee Populations",
    source: "Environmental Watch",
    date: "2024-03-10",
    category: "Environment",
    summary:
      "A comprehensive study conducted by ecologists highlights a concerning trend in global bee populations. The findings indicate a significant decline in bee numbers, posing serious threats to agricultural ecosystems and food security.",
  },
  {
    id: 4,
    headline: "COVID-19 Vaccination Drive Expands to Rural Areas",
    source: "Health Weekly",
    date: "2024-03-10",
    category: "Health",
    summary:
      "Efforts to inoculate against COVID-19 are reaching remote communities as health authorities expand vaccination campaigns to rural areas. Mobile clinics and outreach programs aim to ensure equitable access to vaccines and curb the spread of the virus.",
  },
  {
    id: 5,
    headline: "Tech Giants Announce Collaboration on AI Ethics Guidelines",
    source: "Tech Insights",
    date: "2024-03-10",
    category: "Technology",
    summary:
      "Leading tech companies have joined forces to develop comprehensive guidelines for the ethical use of artificial intelligence. The initiative seeks to address concerns about bias, privacy, and accountability in AI systems.",
  },
  {
    id: 6,
    headline: "Climate Change Summit Concludes with Historic Agreement",
    source: "Climate Watch",
    date: "2024-03-10",
    category: "Environment",
    summary:
      "World leaders have reached a landmark agreement at the Climate Change Summit, pledging ambitious emissions reduction targets and increased support for vulnerable nations. The accord marks a significant step forward in global efforts to combat climate change.",
  },
  {
    id: 7,
    headline: "SpaceX Launches Crewed Mission to Lunar Orbit",
    source: "Space News",
    date: "2024-03-10",
    category: "Science",
    summary:
      "SpaceX has successfully launched a crewed mission to lunar orbit, marking a significant milestone in commercial space exploration. The mission aims to conduct scientific research and prepare for future manned missions to the Moon and beyond.",
  },
  {
    id: 8,
    headline: "New Study Links Air Pollution to Increased Risk of Dementia",
    source: "Health Insights",
    date: "2024-03-10",
    category: "Health",
    summary:
      "A groundbreaking study has found a compelling association between long-term exposure to air pollution and heightened risk of dementia. The findings underscore the urgent need for stronger environmental regulations to protect public health.",
  },
  {
    id: 9,
    headline: "Major Cyberattack Disrupts Global Internet Services",
    source: "Cybersecurity Times",
    date: "2024-03-10",
    category: "Technology",
    summary:
      "A sophisticated cyberattack has caused widespread disruption to internet services worldwide, affecting millions of users. Experts warn of the growing threat posed by cybercriminals and emphasize the importance of robust cybersecurity measures.",
  },
  {
    id: 10,
    headline: "New Drug Shows Promise in Treating Alzheimer's Disease",
    source: "Medical Journal",
    date: "2024-03-10",
    category: "Health",
    summary:
      "A novel drug therapy has demonstrated encouraging results in clinical trials for the treatment of Alzheimer's disease. Researchers are cautiously optimistic about the potential of the new medication to slow cognitive decline and improve quality of life for patients.",
  },
  {
    id: 11,
    headline: "Global Food Prices Reach Highest Levels in a Decade",
    source: "Economic Review",
    date: "2024-03-10",
    category: "Finance",
    summary:
      "Rising commodity prices and supply chain disruptions have driven global food prices to their highest levels in over a decade. The inflationary pressures are raising concerns about food security and affordability, particularly in low-income countries.",
  },
  {
    id: 12,
    headline:
      "Renewable Energy Investment Surges Amid Calls for Climate Action",
    source: "Renewable Energy Today",
    date: "2024-03-10",
    category: "Environment",
    summary:
      "Investment in renewable energy projects is experiencing a sharp uptick as governments and businesses respond to mounting calls for action on climate change. The shift towards clean energy sources is expected to accelerate in the coming years.",
  },
  {
    id: 13,
    headline: "Political Leaders Gather for G20 Summit",
    source: "Global Politics",
    date: "2024-03-10",
    category: "Politics",
    summary:
      "Heads of state and government representatives from the world's leading economies have convened for the G20 Summit to discuss pressing global challenges. Key agenda items include economic recovery, climate change mitigation, and pandemic response.",
  },
  {
    id: 14,
    headline: "New Technology Enables Real-Time Translation of Sign Language",
    source: "Tech Innovations",
    date: "2024-03-10",
    category: "Technology",
    summary:
      "Innovative technology developed by researchers allows for real-time translation of sign language into spoken language. The breakthrough has the potential to enhance communication accessibility for deaf and hard-of-hearing individuals.",
  },
  {
    id: 15,
    headline: "Wildfires Ravage Amazon Rainforest",
    source: "Environmental Crisis",
    date: "2024-03-10",
    category: "Environment",
    summary:
      "Devastating wildfires are sweeping through the Amazon rainforest, threatening biodiversity and indigenous communities. Environmentalists warn of the dire consequences of continued deforestation and call for urgent action to protect the world's largest tropical rainforest.",
  },
  {
    id: 16,
    headline: "Tensions Escalate in Disputed Territory",
    source: "International Relations",
    date: "2024-03-10",
    category: "Politics",
    summary: "Escalating tensions between neighboring countries have",
  },
  {
    id: 17,
    headline: "AI-Powered Robot Assists with COVID-19 Patient Care",
    source: "Medical Technology Today",
    date: "2024-03-10",
    category: "Health",
    summary:
      "A cutting-edge robot equipped with artificial intelligence algorithms is being deployed to assist healthcare workers in managing COVID-19 patients. The robot can perform tasks such as monitoring vital signs, administering medication, and facilitating remote consultations.",
  },
  {
    id: 18,
    headline: "Tech Giants Face Antitrust Investigations",
    source: "Regulatory Watch",
    date: "2024-03-10",
    category: "Technology",
    summary:
      "Major technology companies are under scrutiny as antitrust authorities launch investigations into their business practices. Allegations of monopolistic behavior and anti-competitive conduct have prompted calls for stricter regulations to ensure fair competition in the digital marketplace.",
  },
  {
    id: 19,
    headline:
      "Study Finds Link Between Social Media Use and Mental Health Issues",
    source: "Psychology Today",
    date: "2024-03-10",
    category: "Health",
    summary:
      "A new study suggests a correlation between excessive use of social media platforms and increased rates of depression and anxiety among young adults. Researchers urge individuals to adopt healthier digital habits and limit screen time to safeguard their mental well-being.",
  },
  {
    id: 20,
    headline: "Archeologists Uncover Ancient Civilization in South America",
    source: "Archaeology News",
    date: "2024-03-10",
    category: "History",
    summary:
      "Excavations in the jungles of South America have revealed the remains of an ancient civilization dating back thousands of years. The discovery sheds light on pre-Columbian societies and their advanced architectural and cultural achievements.",
  },
  {
    id: 21,
    headline: "Cybersecurity Breach Exposes Sensitive Government Data",
    source: "Cybersecurity Alert",
    date: "2024-03-10",
    category: "Technology",
    summary:
      "A significant cybersecurity breach has compromised sensitive government data, raising concerns about national security and data privacy. Authorities are investigating the incident and implementing measures to strengthen cyber defenses and prevent future breaches.",
  },
  {
    id: 22,
    headline: "Global Education Summit Addresses Learning Crisis",
    source: "Education Matters",
    date: "2024-03-10",
    category: "Education",
    summary:
      "Leaders from around the world are convening for the Global Education Summit to address the growing learning crisis exacerbated by the COVID-19 pandemic. The summit aims to mobilize resources and implement strategies to ensure equitable access to quality education for all.",
  },
  {
    id: 23,
    headline: "New Study Highlights Benefits of Mediterranean Diet",
    source: "Nutrition Journal",
    date: "2024-03-10",
    category: "Health",
    summary:
      "Research indicates that adherence to the Mediterranean diet is associated with numerous health benefits, including reduced risk of heart disease, stroke, and cognitive decline. Health experts recommend incorporating more fruits, vegetables, fish, and olive oil into daily meals.",
  },
  {
    id: 24,
    headline: "NASA Announces Plans for Manned Mission to Mars",
    source: "Space Exploration News",
    date: "2024-03-10",
    category: "Science",
    summary:
      "NASA has unveiled ambitious plans for a manned mission to Mars, aiming to send astronauts to the Red Planet within the next decade. The mission will involve extensive preparations and technological advancements to ensure the safety and success of the journey.",
  },
  {
    id: 25,
    headline: "Renewable Energy Surpasses Coal as Leading Power Source",
    source: "Energy Trends",
    date: "2024-03-10",
    category: "Environment",
    summary:
      "Renewable energy sources have overtaken coal as the world's leading power source, driven by declining costs and growing environmental concerns. The milestone marks a significant transition towards a more sustainable and carbon-neutral energy system.",
  },
];

const SingleNews = () => {
  const { id } = useParams();
  const [itema, setitem] = useState({});
  function getdata() {
    data.find((item) => {
      if (item.id == id) {
        setitem({ ...item });
      }
    });
  }
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <Card single={true} item={itema} />
    </>
  );
};

export default SingleNews;
