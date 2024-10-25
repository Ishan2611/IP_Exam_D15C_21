const express = require('express');
const cors = require('cors');
const { defer } = require('react-router-dom');
const app = express();
const PORT = 5000;

app.use(cors()); 

const movies = [
    { id: 1, title: "Avengers EndGame", year: 2019, genre: "Sci-Fi", description:"After the Events of Avengers:Infinity War, the Avengers set a mission to destroy Thanos and bring all the dead back." },
    { id: 2, title: "12th Fail", year: 2023, genre: "Biography", description:"It is a inspiring story of IAS Officer Manoj Kumar Sharma, about how he became a IAS officer." },
    { id: 3, title: "Taare Zameen Par", year: 2007, genre: "Inspiring", description:"It is a movie about a dyslexic child about he fought his struggles and became a intelligent student." },
    { id: 4, title: "Dangal", year: 2016, genre: "Biography", description: "It is a biography of Phogat Family, Mahavir Singh Phogat, Geeta Phogat and Babita Phogat about how thir father taught and guided them to become Wrestling champions."},
    { id: 5, title: "Deadpool and Wolverine", year: 2024, genre: "Sci-Fi", description:"A movie which celebrated the characters of Deadpool and Wolverine and all the other X-Men of Fox Universe." },
    { id: 6, title: "Sector 36", year: 2024, genre: "Murder-Mystery", description:"Movie about the shocking incidents of murder.A real story movie." },

];

app.get('/api/movies', (req, res) => {
    res.json(movies);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});