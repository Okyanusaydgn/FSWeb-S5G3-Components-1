import "./haberler.less";
// Haberleri üretmek için aşağıdaki data kullanılacak. Önce inceleyin sonra 94. satıra geçin.
// OPSİYONEL: Kendinizi maceracı hissediyorsanız, bu verileri farklı bir modülden dışa aktarmaya çalışın ve buraya aktarın.
// ES6 Modülleri ile ilgili bilgi için bakabilirsiniz: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const data = [
  {
    baslik: "JavaScript in Space: SpaceX Devs Have Shared CrewDragon’s Tech Stack",
    tarih: "12 temmuz 2023",
    ilkParagraf: "The software engineering team of SpaceX company has entered the Reddit to answer the most relevant user questions and opening up about the technology stack of CrewDragon. Who would have thought that JavaScript will enter an open space literally? Learn more in our latest blog post.",
    ikinciParagraf: "SpaceX’s historic CrewDragon has successfully launched into space on Saturday the 30th of May. The whole world had to hold their breath while watching the iconic moment of humanity coming into the new are of space flights.",
    ucuncuParagraf: "The Crew Dragon launched astronauts from the United States for the first time since the last Shuttle flight in 2011. However, the shuttle itself completely differs from what we have ever had in the past.",
  },
  {
    baslik: 'Workintech Öğrencileri: "Bizler en iyi öğrencileriz!"',
    tarih: "11 Kasım 2022",
    ilkParagraf: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    ikinciParagraf: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    ucuncuParagraf: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`,
  },
  {
    baslik: "Javascript ve Sen, ES6",
    tarih: "10 Kasım 2022",
    ilkParagraf: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    ikinciParagraf: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    ucuncuParagraf: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`,
  },
  {
    baslik: "React vs Angular vs Vue",
    tarih: "9 Kasım 2022",
    ilkParagraf: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    ikinciParagraf: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    ucuncuParagraf: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`,
  },
  {
    baslik: "2022'de Profesyonel Yazılımcı Olmak",
    tarih: "1 Kasım 2022",
    ilkParagraf: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    ikinciParagraf: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    ucuncuParagraf: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`,
  },
];


const haberYapici = (haber) => {
  const divArticle = document.createElement("div");
  divArticle.classList.add("article");

  const baslik = document.createElement("h2");
  baslik.textContent = haber.baslik;
  divArticle.append(baslik);

  const paragraf = document.createElement("p");
  paragraf.classList.add("tarih");
  paragraf.textContent = haber.tarih;
  divArticle.append(paragraf);


  const paragraf1 = document.createElement("p");
  paragraf1.textContent = haber.ilkParagraf;
  divArticle.append(paragraf1);

  const paragraf2 = document.createElement("p");
  paragraf2.textContent = haber.ikinciParagraf;
  divArticle.append(paragraf2);

  const paragraf3 = document.createElement("p");
  paragraf3.textContent = haber.ucuncuParagraf;
  divArticle.append(paragraf3);

  const span = document.createElement("button");
  span.classList.add("expandButton");
  span.textContent = "+"; 
  span.addEventListener("click", (e) =>{  // buradaki e "event" anlamına geliyor.
    e.target.parentElement.classList.toggle("article-open"); // parentElement dememizin anlamı "div class ='article'" yapısına article-open class ını ekleyip çıkarmak için "parentElement" kullanıyoruz.
  })
  divArticle.append(span);

  return divArticle; 
}

data.forEach((haber) => {
  document.querySelector(".articles").append(haberYapici(haber)) 
})

// data içerisindeki haberlerden sırayla alacak  -- data.forEach(haber)
// her birini kullanarak component i oluşturacak  -- haberYapici(haber)
// bunu gidip articles ın içine append edecek ---- document.querySelector(".articles")




/*
  Adım 1: Haber oluşturmak için 'haberYapici' adında bir bileşen(component) oluşturun.
  Bileşeniniz, argümanı haberleri içeren dizi olarak alan bir fonksiyon olacak,
  ve aşağıdaki gibi görünen bir DOM düğümü döndürecek:

  <div class="article">
    <h2>{haber başlığı}</h2>
    <p class="tarih">{haber tarihi}</p>

    {üç ayrı paragraf elementi}

    <button class="expandButton">+</button>
  </div>

  Adım 2: Hala `haberYapici` içindeyiz, button.expandButton 'a bir click event dinleyici ekleyin.
  Bu dinleyici div.article öğesine 'article-open' class'ını ekleyip/çıkaracak (toogle).

  Adım 3: Fonksiyonunuzdan bir öğe döndürmeyi unutmayın.  -----> burada bahsettiği return komutunu kullanmayı unutma

  Adım 4: Fonksiyonunuzun dışında, tüm datayı döngüye sokun(loop). Bir div.article öğesi oluşturmak ve bunu div.articles içindeki DOM'a eklemek için
  her yinelemede oluşturduğunuz bileşeninizi kullanacaksınız(bknz. index.html).

  Adım 5: Veri dizisine yeni haber nesnesi eklemeyi deneyin. Diğer verilerle aynı yapıda olmasına dikkat edin.
  Eklediğiniz yeni haberi görmek için sayfayı yenileyin.
*/
