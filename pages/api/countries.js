export default async function getCountries(req, res) {
    if (req.method === "GET") {
        const data = (await fetch("https://restcountries.com/v2/all")).body
        res.status(200).send(data);
    }
}