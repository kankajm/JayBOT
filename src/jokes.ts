/*
Written by Jaroslav Kaňka <kanka@kankaj.cz>
*/

let jokes: string[] = [
	'Policajt zastaví podnapilého řidiče: "Jste ochotný podrobit se zkoušce na alkohol?" "Jasně a v jaký hospodě?',
	'Jeli 3 tanky a 1 netankoval',
	'Hitler: „Dnes jsem snídal nad válečnou mapou, a neuvěříte, co se stalo... Podrobil jsem si Československo!',
    '„Máš něco k pití?“ „Vodu.“ „A něco tvrdšího?“ „Led.“',
    'Jak to udělat, aby se vlk nažral a koza zůstala celá? Předhodit mu ovci.',
    'Doktor mi dával půl roku života. Tak jsem ho zabil a dostal jsem 8 let.',
    'Vite co je lepsi než muž pod papučou? Účet pod kontrolou',
    'Víte, co udělat, když dostane epileptik záchvat ve vaně? Hodit k němu špinavé prádlo.',
    'Přijde dědeček domů z práce a rozloží se na gauči.',
    'Co je černé a přiškvařené ke stropu? Nepříliš dobrý elektrikář.',
    'Zlato, Vždyť ty nejsi vůbec tlustá!“ „No tak, bradu vzhůru!“ „Ne tuhle, tu druhou...',
    'Přijde exekutor k bytu a zazvoní. Z bytu se ozve: „Nejsme doma.“ Exekutor: „No, teď už nejste.“',
    'Velitel v koncentráku se ptá chlapečka: „Kolik ti je?“ Chlapeček odpoví: „Bude mi 14.“ „Ne, nebude...',
    'Muž bez ruky chodí po městě a kouká na vývěsní štíty obchodů. Copak asi hledá? Second Hand.',
    'Kolik mrtvých prostitutek je potřeba k výměně žárovky? . . . No určitě víc než tři, protože mám ve sklepě pořád tmu.',
    'Doktor: “Jste zdravý jako ryba!” Pacient:”Díky Bohu!!!” Doktor: “Jako ryba s rakovinou...',
    'Co nejlépe odstraní žvýkačku z vlasů? . . . Leukémie!',
    'Koukám v TV na paraolympiádu... a nikde ani noha!',
    'Dáma ve středním věku si kupovala papouška. Jednoho si vyhlédla a povídá mu: “Tak co, ty malej hlupáčku, umíš mluvit?” A papoušek odpověděl: “A co ty, stará čarodějnice, umíš lítat?',
    'Kouká se pan Strouhal na televizi a škrábe se při tom špendlíkem v uchu, a najednou...nejde zvuk!',
    'jeli 3 tanky a 1 netankoval',
    'Anička se narodila bez rukou. Ťuk,ťuk. Kdo tam? No Anička asi těžko.',
    'Žena si nechává věštit u kartářky: "Zítra vám zemře muž." "To vím, ale podívejte se, jestli mě zavřou?',
    'Blondýnka se svěřuje kamarádce blondýně: "Tak jsem si dělala těhotenský test." "A byly tam těžký otázky?"',
    'Dvě blondýnky, jedna říká druhé: "Muž mi dal kreditku, jdeme nakupovat!" "A PIN dal?" "Ne, nepindal."',
    'Přijde trpaslík do kníhovny a ptá se: "Máte něco o diskriminaci trpaslíků?" - "Ano máme, támhle v regálu úplně nahoře...',
    'Jaké budou nejčastější popáleniny když hoří základní škola no přece prvního a druhého stupně',
    'Co dělá lenochod, když hoří les? . . Hoří taky.',
    'Sanitka jede od dopravní nehody s těžce raněným do nemocnice, když najednou vysadí motor. Řidič se otočí a říká dozadu doktorovi: "Je to blbý, chcíplo mi to!" Doktor na to: "Hmm, mně taky.',
    'Princ ke královi: "Pane králi, splnil jsem své slovo, zde v pytli jsou tři dračí hlavy." "Děkuji princi, i já plním slovo své. Zde v pytli je ruka a srdce princezny!"',
    'Bazén. Jen dvě hlavy. On a Ona. Ona: "Kde je proboha Zuzanka." On: "Neboj se milá, držím ji za ruku."',
    'Bin Ládin hraje s Buschem šachy, víte kdo má větší šanci na výhru? Určitě bin Ládin, Buschovi už chybějí dvě věže.',
    'Co je třeba, aby se Beatles dali znovu dohromady? ........ Ješte tři náboje.',
    'Kat přišel pozdě večer domu a hned budí svoje děti. "Děcka, vstávejte, přenesl jsem vám z práce nový balón." Děti se podívají na novou hračku a zajásaly. "Jejda, zase jeden z otevřenýma očima!"',
    '"Milé děti," říká tatínek svým potomkům. "Naše kočička měla dnes koťátka. Koťátka potřebují teploučko, aby se jim dobře vedlo. Teplo vzniká topením. Tak je vezměte a půjdeme je topit."',
    'Potkají se dva sousedi: "Ale copak, pane Novák, dneska má vaše tchýně pohřeb, a vy jdete do práce?" "No to víte, nejdřív povinnosti, potom zábava.',
    'Víte, jaký je rozdíl mezi vagónem zrní a vagónem mrtvejch lidí? .......... Zrní nejde nakládat vidlema.',
    'Ptá se paní učitelka: "Co víte děti o významných matematicích starého Řecka?" Přihlásí se Pepíček a povídá: "Všichni zemřeli!"',
    '"Slyšela jsem, že Váš syn studuje na univerzitě. Co z něho bude, až skončí?" ptá se známá paní Novákové. "Obávám se, že důchodce."',
    '"Pane doktore, čím víc užívám ty prášky, tím mi je hůř." "A jaké prášky užíváte, dědo?" "Nóó, ty nejlepší z reklamy. Persil a Ariel."',
    'Proč jsou vtipy o blondýnách tak krátké? . . Aby si je muži byli schopni zapamatovat.',
    'Můj dědeček je v dobré kondici. Má oko jestřába, zuby vlka, nohy kamzíka, srdce lva a doživotní zákaz vstupu do chomutovského zooparku.',
    'Víte proč má každý policajt tu placatou čepici, no přece každý hajzl má víko.',
    'Jsi krásný jak slunce. Nedá se na tebe dívat.',
    'Čím se liší škola od ústavu pro duševně choré? Obvykle mají jiné telefonní číslo!',
    'Chuck Norris chytil koronavirus. Bylo mu ho líto, tak ho zase pustil.',
    'Jednotka ruských vojáku letí do Čečenska a velitel motivuje vojáky: "Chlapi, za každou čečenskou hlavu dostanete láhev vodky!" Letadlo přistane, rozrazí se dveře, vojáci se rozprchnou. Za několik minut se vrací a každý táhne několik hlav. Velitel je celý bledý a zpocený: "Kurva hoši, to bylo jen mezipřistání v Kyjevě!',
    'Chceš se stát sluncem mého života?“ „Ano.“ „Tak se ode mě drž 147 097 000 km daleko.',
    'Dva zloději ukradli kalendář. Každý dostal šest měsíců.',
    'Holky o mně říkají, že jsem ošklivej, dokud nezjistí, kolik vydělávám... Pak říkají, že jsem ošklivej a chudej.',
    'Přijde Hitler do pekárny a řekne: „Vezmu si půlku Šumavy.',
    'Tati, nevíš, kde je ta věc na škrábání brambor?“ „Jestli není v kuchyni, tak asi šla nakoupit.',
    'Kolik programátorů je potřeba na výměnu žárovky? Žádný, to je chyba hardwaru.',
    'Na dotaz "Používáte internet?" odpovědělo 100% respondentů kladně. To byl poslední výsledek ankety, která proběhla na našem serveru.',
    'Chuck Norris dokáže napsat program, který umí projít v příkazu if else oběma větvemi současně.',
    'Programátor si říká v pondělí ráno: "Ještě se dvakrát vyspím a je tu víkend."',
    'Žena je jako počítač. Víš kam sáhnout, ale nevíš co to udělá.',
    'Jakou výhodu má zdrsněný povrch kondomů? Ani při vyšších rychlostech nemůžeme dostat smyk.',
    'Přenáší AIDS i hmyz? Ne, jen ptáci.'
];


module.exports = jokes;
