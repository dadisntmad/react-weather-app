import freezingRain from '../assets/weather/chancerain.svg';
import thunderStorms from '../assets/weather/chancetstorms.svg';
import clear from '../assets/weather/clear.svg';
import cloudy from '../assets/weather/cloudy.svg';
import flurries from '../assets/weather/flurries.svg';
import atmosphere from '../assets/weather/fog.svg';
import mostlyCloudy from '../assets/weather/mostlycloudy.svg';
import fewClouds from '../assets/weather/partlysunny.svg';
import rain from '../assets/weather/rain.svg';
import snow from '../assets/weather/snow.svg';
import unknown from '../assets/weather/unknown.svg';

export const imagePicker = (condition, alt) => {
  switch (condition) {
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      return <img src={thunderStorms} alt={alt} style={{ width: 180 }} />;
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      return <img src={unknown} alt={alt} style={{ width: 180 }} />;
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
      return <img src={rain} alt={alt} style={{ width: 180 }} />;
    case 511:
      return <img src={freezingRain} alt={alert} style={{ width: 180 }} />;
    case 520:
    case 521:
    case 522:
    case 531:
      return <img src={flurries} alt={alt} style={{ width: 180 }} />;
    case 600:
    case 601:
    case 602:
    case 611:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      return <img src={snow} alt={alt} style={{ width: 180 }} />;
    case 701:
    case 711:
    case 721:
    case 731:
    case 741:
    case 751:
    case 761:
    case 762:
    case 771:
    case 781:
      return <img src={atmosphere} alt={alt} style={{ width: 180 }} />;
    case 800:
      return <img src={clear} alt={alt} style={{ width: 180 }} />;
    case 801:
      return <img src={fewClouds} alt={alt} style={{ width: 180 }} />;
    case 802:
      return <img src={cloudy} alt={alt} style={{ width: 180 }} />;
    case 803:
    case 804:
      return <img src={mostlyCloudy} alt={alt} style={{ width: 180 }} />;
    default:
      return <img src={unknown} alt={alt} style={{ width: 180 }} />;
  }
};
