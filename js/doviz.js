document.addEventListener('DOMContentLoaded', function () {
    // Döviz kurlarını çekmek için API URL'i
    var apiUrl = 'https://api.exchangeratesapi.io/latest?base=TRY';

    // Döviz kurlarını çekme fonksiyonu
    function fetchExchangeRates() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Dolar (USD) kuru
                var usdRate = data.rates.USD;
                document.getElementById('usd').textContent += usdRate;

                // Euro (EUR) kuru
                var eurRate = data.rates.EUR;
                document.getElementById('eur').textContent += eurRate;

                // Sterlin (GBP) kuru
                var gbpRate = data.rates.GBP;
                document.getElementById('gbp').textContent += gbpRate;
            })
    }

    // Sayfa yüklendiğinde döviz kurlarını çek
    fetchExchangeRates();
});
