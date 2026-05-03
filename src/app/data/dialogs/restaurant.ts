import { Dialog } from '../../models/word.model';

export const RESTAURANT_DIALOGS: Dialog[] = [
  // me first — réservation par téléphone
  { id: 're-d-01', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'konbanwa, yoyaku o onegaishitai n desu ga, asu no yoru wa aite imasu ka?', french: 'Bonsoir, je voudrais réserver, demain soir vous avez de la place ?' },
    { speaker: 'them', romaji: 'kashikomarimashita, nan-ji ni nasaimasu ka?', french: 'C\'est noté, à quelle heure ?' },
    { speaker: 'me', romaji: 'shichi-ji-han ni futari de onegaishimasu.', french: 'À 19h30 pour deux personnes svp.' },
    { speaker: 'them', romaji: 'kakunin shimashita, onamae o douzo.', french: 'Confirmé, votre nom svp.' },
  ] },
  // them first
  { id: 're-d-02', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'nan-mei sama desu ka?', french: 'Vous êtes combien ?' },
    { speaker: 'me', romaji: 'otona san-nin desu, kodomo wa imasen.', french: 'Trois adultes, pas d\'enfants.' },
    { speaker: 'them', romaji: 'mado-gawa to teeburu, dochira ga yoroshii desu ka?', french: 'Côté fenêtre ou table normale ?' },
    { speaker: 'me', romaji: 'mado-gawa de onegai dekireba ureshii desu.', french: 'Côté fenêtre ce serait super si possible.' },
  ] },
  { id: 're-d-03', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'nan-ji ni nasaimasu ka?', french: 'À quelle heure ?' },
    { speaker: 'me', romaji: 'shichi-ji-han ni onegaishimasu, sore wa daijoubu desu ka?', french: 'À 19h30 svp, c\'est possible ?' },
    { speaker: 'them', romaji: 'kakunin shimasu, shoushou omachi kudasai.', french: 'Je vérifie, un instant svp.' },
    { speaker: 'me', romaji: 'hai, omachi shite imasu.', french: 'Oui, j\'attends.' },
  ] },
  // me first — arrivée
  { id: 're-d-04', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, yoyaku shite iru Pierre desu, shichi-ji-han no yoyaku desu.', french: 'Pardon, j\'ai réservé au nom de Pierre pour 19h30.' },
    { speaker: 'them', romaji: 'Pierre-sama desu ne, gokakunin dekimashita.', french: 'M. Pierre, j\'ai votre réservation.' },
    { speaker: 'me', romaji: 'mado-gawa no seki ni narimasu ka?', french: 'Ce sera bien côté fenêtre ?' },
    { speaker: 'them', romaji: 'hai, mado-gawa ni go-annai shimasu, douzo.', french: 'Oui, je vous mène côté fenêtre.' },
  ] },
  { id: 're-d-05', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'odenwa-bangou wa?', french: 'Votre numéro de téléphone ?' },
    { speaker: 'me', romaji: 'zero-kyuu-zero no ___ desu, mou ichido ii-mashou ka?', french: 'C\'est le 090-___, je le redis ?' },
    { speaker: 'them', romaji: 'onegai itashimasu, mou ichido yukkuri.', french: 'Oui svp, encore une fois lentement.' },
    { speaker: 'me', romaji: 'wakari mashita, zero, kyuu, zero, ___.', french: 'D\'accord : 0, 9, 0, ___.' },
  ] },
  { id: 're-d-06', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'irasshaimase!', french: 'Bienvenue !' },
    { speaker: 'me', romaji: 'konbanwa, Pierre de yoyaku shiteimasu.', french: 'Bonsoir, j\'ai réservé au nom de Pierre.' },
    { speaker: 'them', romaji: 'kashikomarimashita, gokakunin sasete itadakimasu.', french: 'C\'est noté, je vérifie.' },
    { speaker: 'me', romaji: 'yoroshiku onegaishimasu.', french: 'Je vous remercie.' },
  ] },
  { id: 're-d-07', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'oyoyaku no onamae wa?', french: 'À quel nom est la réservation ?' },
    { speaker: 'me', romaji: 'Pierre desu, shichi-ji-han no yoyaku desu.', french: 'Pierre, réservation à 19h30.' },
    { speaker: 'them', romaji: 'kakunin dekimashita, oseki ni go-annai shimasu.', french: 'Confirmé, je vous mène à votre place.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, doumo.', french: 'Merci, je vous suis.' },
  ] },
  // me first — sans réservation
  { id: 're-d-08', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, yoyaku wa shite inai no desu ga, futari seki wa arimasu ka?', french: 'Pardon, je n\'ai pas réservé, vous avez une table pour deux ?' },
    { speaker: 'them', romaji: 'sukoshi omachi itadakimasu ga, daijoubu desu yo.', french: 'Un peu d\'attente mais c\'est ok.' },
    { speaker: 'me', romaji: 'dono gurai machimasu ka?', french: 'Environ combien de temps ?' },
    { speaker: 'them', romaji: 'juppun gurai de gozaimasu.', french: 'Environ 10 minutes.' },
  ] },
  { id: 're-d-09', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'kitsuen-seki to kinen-seki, dochira ga yoroshii desu ka?', french: 'Fumeur ou non-fumeur ?' },
    { speaker: 'me', romaji: 'kinen-seki onegaishimasu, mado no chikaku ga ii desu.', french: 'Non-fumeur svp, près de la fenêtre serait bien.' },
    { speaker: 'them', romaji: 'mado-gawa wa ainiku ippai desu.', french: 'La fenêtre est malheureusement complète.' },
    { speaker: 'me', romaji: 'sou desu ka, ja kinen-seki dake de daijoubu desu.', french: 'Ah, alors juste non-fumeur ça ira.' },
  ] },
  // me first — comptoir
  { id: 're-d-10', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, kauntaa-seki wa aite imasu ka? shefu no mae de tabetai desu.', french: 'Pardon, y a-t-il de la place au comptoir ? J\'aimerais voir le chef.' },
    { speaker: 'them', romaji: 'hai, kochira douzo, subarashii sentaku desu.', french: 'Oui, par ici, excellent choix.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, tanoshimi desu.', french: 'Merci, j\'ai hâte.' },
    { speaker: 'them', romaji: 'menyuu o omochi shimasu, shoushou omachi kudasai.', french: 'Je vous apporte le menu, un instant.' },
  ] },
  { id: 're-d-11', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'kochira no oseki de yoroshii desu ka?', french: 'Cette place vous convient ?' },
    { speaker: 'me', romaji: 'hai, daijoubu desu, taihen ki ni iri-mashita.', french: 'Oui parfait, ça me plaît beaucoup.' },
    { speaker: 'them', romaji: 'menyuu o omochi shimasu, shoushou omachi kudasai.', french: 'Je vous apporte le menu, un instant.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, omachi shite imasu.', french: 'Merci, j\'attends.' },
  ] },
  { id: 're-d-12', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'okimari ni narimashitara, oyobi kudasai.', french: 'Quand vous aurez choisi, appelez-nous.' },
    { speaker: 'me', romaji: 'sumimasen, ato gofun gurai kakari masu.', french: 'Pardon, ça me prendra encore 5 min.' },
    { speaker: 'them', romaji: 'goyukkuri douzo.', french: 'Prenez votre temps.' },
    { speaker: 'me', romaji: 'arigatou, kimari mashitara koe o kakemasu.', french: 'Merci, je vous appelle quand j\'ai choisi.' },
  ] },
  // me first — boissons
  { id: 're-d-13', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, biiru o ippai to ocha o ippai onegaishimasu.', french: 'Pardon, une bière et un thé vert svp.' },
    { speaker: 'them', romaji: 'biiru wa nama de yoroshii desu ka?', french: 'Bière pression ?' },
    { speaker: 'me', romaji: 'hai, nama biiru de onegaishimasu.', french: 'Oui, en pression svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, sugu omochi shimasu.', french: 'Noté, j\'apporte ça tout de suite.' },
  ] },
  { id: 're-d-14', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'saisho ni nani o omeshiagari ni narimasu ka?', french: 'Que prenez-vous d\'abord ?' },
    { speaker: 'me', romaji: 'tsumetai ocha to mizu o onegaishimasu.', french: 'Du thé vert froid et de l\'eau svp.' },
    { speaker: 'them', romaji: 'kashikomari mashita, sugu omochi shimasu.', french: 'C\'est noté, j\'apporte ça tout de suite.' },
    { speaker: 'me', romaji: 'arigatou, isoide imasen.', french: 'Merci, je ne suis pas pressé.' },
  ] },
  { id: 're-d-15', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'okawari wa ikaga desu ka?', french: 'Souhaitez-vous être resservi ?' },
    { speaker: 'me', romaji: 'iie, kekkou desu, mou onaka ippai desu.', french: 'Non merci, je suis rassasié.' },
    { speaker: 'them', romaji: 'kashikomarimashita, dezaato no jikan desu ne.', french: 'Compris, c\'est l\'heure du dessert.' },
    { speaker: 'me', romaji: 'menyuu o misete itadakemasu ka?', french: 'Vous me montrez le menu svp ?' },
  ] },
  // me first — recommandation
  { id: 're-d-16', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, kyou no osusume wa nan desu ka?', french: 'Pardon, qu\'est-ce que vous recommandez aujourd\'hui ?' },
    { speaker: 'them', romaji: 'kyou wa shinsen na sashimi ga arimasu, toro to amaebi ga osusume desu.', french: 'Aujourd\'hui on a du sashimi frais, le toro et l\'amaebi sont à la carte.' },
    { speaker: 'me', romaji: 'omakase setto wa arimasu ka?', french: 'Vous avez un menu omakase ?' },
    { speaker: 'them', romaji: 'hai, omakase mo gozaimasu, ikaga desu ka?', french: 'Oui, on a l\'omakase, ça vous tente ?' },
  ] },
  { id: 're-d-17', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'kono mise no meibutsu wa sushi desu.', french: 'Notre spécialité, c\'est le sushi.' },
    { speaker: 'me', romaji: 'sushi ga daisuki desu, omakase setto wa arimasu ka?', french: 'J\'adore les sushis, vous avez un menu omakase ?' },
    { speaker: 'them', romaji: 'hai, sanshurui no setto ga gozaimasu.', french: 'Oui, on a trois formules.' },
    { speaker: 'me', romaji: 'mannaka no setto de onegaishimasu.', french: 'La formule du milieu svp.' },
  ] },
  { id: 're-d-18', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'honjitsu no osusume wa toro to amaebi desu.', french: 'Aujourd\'hui on conseille le toro et l\'amaebi.' },
    { speaker: 'me', romaji: 'futatsu mo tabete mitai desu, ryouhou onegaishimasu.', french: 'J\'aimerais goûter les deux, les deux svp.' },
    { speaker: 'them', romaji: 'kashikomari mashita, ryouhou de gozaimasu ne.', french: 'Bien noté, les deux.' },
    { speaker: 'me', romaji: 'arigatou, tanoshimi ni shite imasu.', french: 'Merci, j\'ai hâte.' },
  ] },
  // me first — produits de saison
  { id: 're-d-19', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, kisetsu no osusume ryouri wa arimasu ka?', french: 'Pardon, vous avez des plats de saison à recommander ?' },
    { speaker: 'them', romaji: 'matsutake to sanma ga ima ichiban yoi desu.', french: 'Le matsutake et le sanma sont au top en ce moment.' },
    { speaker: 'me', romaji: 'sanma wa hatsumete desu, tabete mitai desu.', french: 'Je n\'ai jamais goûté le sanma, je veux essayer.' },
    { speaker: 'them', romaji: 'oishii desu yo, zehi douzo.', french: 'C\'est délicieux, profitez-en.' },
  ] },
  // me first — commande
  { id: 're-d-20', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, chuumon shite mo ii desu ka?', french: 'Pardon, je peux commander ?' },
    { speaker: 'them', romaji: 'hai, douzo, gochuumon wa okimari desu ka?', french: 'Oui, vous avez choisi ?' },
    { speaker: 'me', romaji: 'kore to kore o futatsu zutsu, ato mizu mo onegaishimasu.', french: 'Deux de chaque ceci, et une eau aussi svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, sugu omochi shimasu.', french: 'Noté, j\'apporte ça tout de suite.' },
  ] },
  { id: 're-d-21', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'kochira mo go-issho ni ikaga desu ka?', french: 'Et ceci aussi avec ?' },
    { speaker: 'me', romaji: 'oishi-sou desu ne, ja hitotsu dake onegaishimasu.', french: 'Ça a l\'air bon, alors juste un svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, hokani wa daijoubu desu ka?', french: 'C\'est noté, autre chose ?' },
    { speaker: 'me', romaji: 'mada wakaranai node, ato de tanomimasu.', french: 'Je ne sais pas encore, je commanderai plus tard.' },
  ] },
  // me first — niveau piquant
  { id: 're-d-22', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, kono ryouri wa karai desu ka? karai mono ga nigate de...', french: 'Pardon, ce plat est piquant ? Je supporte mal le piquant.' },
    { speaker: 'them', romaji: 'amakuchi ni dekimasu yo, ikaga itashimashou ka?', french: 'On peut le faire doux, vous le souhaitez ?' },
    { speaker: 'me', romaji: 'amakuchi de onegaishimasu.', french: 'Doux svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, amakuchi ni shimasu.', french: 'C\'est noté, je le mets doux.' },
  ] },
  // me first — cuisson viande
  { id: 're-d-23', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, oniku no yakikata wa midiamu de onegaishimasu.', french: 'Pardon, la viande saignante svp.' },
    { speaker: 'them', romaji: 'midiamu reer ni mo dekimasu ga, ikaga desu ka?', french: 'On peut faire très saignant aussi, ça vous tente ?' },
    { speaker: 'me', romaji: 'iie, futsuu no midiamu de kekkou desu.', french: 'Non, saignant standard ça ira.' },
    { speaker: 'them', romaji: 'kashikomarimashita.', french: 'C\'est noté.' },
  ] },
  // me first — allergie
  { id: 're-d-24', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, ebi ni arerugii ga aru n desu ga, kono ryouri ni haitte imasu ka?', french: 'Pardon, je suis allergique aux crevettes, ce plat en contient ?' },
    { speaker: 'them', romaji: 'haitte imasu, ebi-nuki no ban mo gozaimasu.', french: 'Oui, mais on a une version sans crevettes.' },
    { speaker: 'me', romaji: 'ebi-nuki de onegaishimasu, oshiete kurete arigatou gozaimasu.', french: 'Sans crevettes svp, merci de m\'avoir prévenu.' },
    { speaker: 'them', romaji: 'kashikomarimashita, ki o tsukete tsukuri shimasu.', french: 'Noté, on fait attention.' },
  ] },
  // them first — service
  { id: 're-d-25', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'omachidousama deshita, dozo.', french: 'Désolé de l\'attente, voilà.' },
    { speaker: 'me', romaji: 'iie, daijoubu desu, oishi-sou desu ne!', french: 'C\'est rien, ça a l\'air délicieux !' },
    { speaker: 'them', romaji: 'tsumetai mama no hou ga oishii desu yo.', french: 'C\'est meilleur frais.' },
    { speaker: 'me', romaji: 'wakari-mashita, sugu tabe-masu, itadakimasu.', french: 'Compris, je mange tout de suite, bon appétit.' },
  ] },
  { id: 're-d-26', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'okimari no sashimi-moriawase desu.', french: 'Voici votre assortiment de sashimi.' },
    { speaker: 'me', romaji: 'waa, kireina moriawase desu, shashin totte mo ii desu ka?', french: 'Wow, c\'est joliment dressé, je peux prendre une photo ?' },
    { speaker: 'them', romaji: 'mochiron, douzo douzo.', french: 'Bien sûr, je vous en prie.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, ja itadakimasu.', french: 'Merci, alors bon appétit.' },
  ] },
  { id: 're-d-27', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'atsui desu kara, ki o tsukete kudasai.', french: 'C\'est chaud, attention.' },
    { speaker: 'me', romaji: 'hai, sukoshi samashi-nagara tabe-masu.', french: 'Oui, je vais le laisser refroidir un peu.' },
    { speaker: 'them', romaji: 'douzo, oishiku omeshiagari kudasai.', french: 'Profitez bien.' },
    { speaker: 'me', romaji: 'iroiro arigatou gozaimasu.', french: 'Merci pour tout.' },
  ] },
  // me first — compliment
  { id: 're-d-28', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, totemo oishii desu, tokuni ano sauce ga subarashii desu.', french: 'Pardon, c\'est vraiment délicieux, surtout cette sauce.' },
    { speaker: 'them', romaji: 'arigatou gozaimasu, shefu ga yorokobimasu.', french: 'Merci, le chef sera content.' },
    { speaker: 'me', romaji: 'shefu ni tsutaete itadakemasu ka?', french: 'Vous pouvez lui dire de ma part ?' },
    { speaker: 'them', romaji: 'mochiron desu, otsutae shimasu.', french: 'Bien sûr, je le lui dirai.' },
  ] },
  // me first — commander encore
  { id: 're-d-29', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, nama biiru o mou ippai onegaishimasu.', french: 'Pardon, encore une bière pression svp.' },
    { speaker: 'them', romaji: 'sugu omochi shimasu, hokani wa nanika gozaimasu ka?', french: 'Tout de suite, autre chose ?' },
    { speaker: 'me', romaji: 'iie, sore dake de kekkou desu.', french: 'Non, c\'est bon, merci.' },
    { speaker: 'them', romaji: 'kashikomarimashita.', french: 'Noté.' },
  ] },
  // me first — eau
  { id: 're-d-30', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, mizu o mou sukoshi itadakemasu ka?', french: 'Pardon, je peux avoir encore un peu d\'eau ?' },
    { speaker: 'them', romaji: 'kashikomarimashita, sugu omochi shimasu.', french: 'C\'est noté, j\'apporte ça tout de suite.' },
    { speaker: 'me', romaji: 'sumimasen, iroiro onegaishite.', french: 'Pardon, je vous dérange souvent.' },
    { speaker: 'them', romaji: 'tonde mo gozaimasen, goyukkuri douzo.', french: 'Pas de souci du tout, prenez votre temps.' },
  ] },
  { id: 're-d-31', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'okawari ikaga desu ka?', french: 'On vous ressert ?' },
    { speaker: 'me', romaji: 'gohan dake mou sukoshi onegaishimasu.', french: 'Juste encore un peu de riz svp.' },
    { speaker: 'them', romaji: 'kashikomari mashita, jiro-jiro o-tsugi shimasu.', french: 'C\'est noté, je vous en sers à la louche.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu.', french: 'Merci.' },
  ] },
  { id: 're-d-32', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'okutsu o nuide oagari kudasai.', french: 'Enlevez vos chaussures avant d\'entrer svp.' },
    { speaker: 'me', romaji: 'hai, koko de yoroshii desu ka?', french: 'D\'accord, ici c\'est ok ?' },
    { speaker: 'them', romaji: 'soko ni ireru kutsubako ga gozaimasu.', french: 'Vous pouvez les ranger dans le casier.' },
    { speaker: 'me', romaji: 'wakari-mashita, fuda o motte ikimasu.', french: 'D\'accord, je prends le ticket.' },
  ] },
  { id: 're-d-33', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'kanpai!', french: 'Santé !' },
    { speaker: 'me', romaji: 'kanpai! konya wa tanoshikatta desu.', french: 'Santé ! C\'était une belle soirée.' },
    { speaker: 'them', romaji: 'kochira koso, mata go-issho shimashou.', french: 'Pareil, on remet ça !' },
    { speaker: 'me', romaji: 'zehi, mata onegaishimasu.', french: 'Avec plaisir, à la prochaine.' },
  ] },
  // me first — dessert
  { id: 're-d-34', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'gochisousama deshita, dezaato no menyuu wa arimasu ka?', french: 'Merci pour le repas, vous avez un menu dessert ?' },
    { speaker: 'them', romaji: 'hai, kochira desu, macha-aisu ga osusume desu.', french: 'Oui, le voici, la glace au matcha est recommandée.' },
    { speaker: 'me', romaji: 'futatsu onegaishimasu, macha-aisu de.', french: 'Deux glaces matcha svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, sugu omochi shimasu.', french: 'Noté, j\'apporte ça tout de suite.' },
  ] },
  { id: 're-d-35', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'dezaato wa ikaga desu ka?', french: 'Un dessert ?' },
    { speaker: 'me', romaji: 'macha-aisu o onegaishimasu, futatsu de.', french: 'Une glace au matcha svp, deux.' },
    { speaker: 'them', romaji: 'kashikomarimashita, koohii mo ikaga desu ka?', french: 'C\'est noté, et un café aussi ?' },
    { speaker: 'me', romaji: 'koohii wa ato ni shimasu, arigatou.', french: 'Le café, plus tard, merci.' },
  ] },
  // me first — addition
  { id: 're-d-36', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, okaikei o onegaishimasu.', french: 'Pardon, l\'addition svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, sugu omochi shimasu.', french: 'Noté, j\'apporte ça tout de suite.' },
    { speaker: 'me', romaji: 'betsubetsu de onegaishimasu, futari bun desu.', french: 'Séparément svp, on est deux.' },
    { speaker: 'them', romaji: 'kashikomarimashita, hitori-zutsu de keisan shimasu.', french: 'C\'est noté, je calcule par personne.' },
  ] },
  // me first — addition séparée
  { id: 're-d-37', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, okaikei wa betsubetsu ni dekimasu ka?', french: 'Pardon, on peut payer séparément ?' },
    { speaker: 'them', romaji: 'mochiron desu, hitori-bun zutsu keisan shimasu.', french: 'Bien sûr, je calcule par personne.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, kaado de haraemasuka?', french: 'Merci, on peut payer par carte ?' },
    { speaker: 'them', romaji: 'hai, douzo kochira ni.', french: 'Oui, par ici svp.' },
  ] },
  { id: 're-d-38', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'betsubetsu desu ka, isshou desu ka?', french: 'Séparément ou ensemble ?' },
    { speaker: 'me', romaji: 'betsubetsu de onegaishimasu, kaado de wari-kan dekimasu ka?', french: 'Séparément svp, on peut diviser sur la carte ?' },
    { speaker: 'them', romaji: 'mochiron desu, junbi shimasu.', french: 'Bien sûr, je prépare ça.' },
    { speaker: 'me', romaji: 'sumimasen, taisetsuni shimasu.', french: 'Pardon, et merci.' },
  ] },
  // me first — paiement carte
  { id: 're-d-39', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, kaado wa tsukaemasu ka? kontakuto-resu de haraitai desu.', french: 'Pardon, la carte marche ? Je voudrais payer en sans contact.' },
    { speaker: 'them', romaji: 'hai, douzo kazashite kudasai.', french: 'Oui, posez-la.' },
    { speaker: 'me', romaji: 'kazashi mashita, owari desu ka?', french: 'Posée, c\'est fait ?' },
    { speaker: 'them', romaji: 'hai, doumo arigatou gozaimashita.', french: 'Oui, merci beaucoup.' },
  ] },
  { id: 're-d-40', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'anshou-bangou o nyuuryoku kudasai.', french: 'Tapez votre code PIN svp.' },
    { speaker: 'me', romaji: 'hai, ima nyuuryoku shimasu, sain wa irimasen ka?', french: 'Oui je le tape, pas besoin de signature ?' },
    { speaker: 'them', romaji: 'sain wa fuyou de gozaimasu.', french: 'Pas de signature.' },
    { speaker: 'me', romaji: 'wakari mashita, doumo arigatou.', french: 'D\'accord, merci.' },
  ] },
  // me first — reçu
  { id: 're-d-41', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, reshiito o onegaishimasu, kaisha-mei o ___ to kaite kudasai.', french: 'Pardon, un reçu svp, mettez le nom de société : ___.' },
    { speaker: 'them', romaji: 'kashikomarimashita, kaite mairimasu.', french: 'C\'est noté, je le rédige.' },
    { speaker: 'me', romaji: 'sumimasen, gomendou kakemasu.', french: 'Pardon de l\'embarras.' },
    { speaker: 'them', romaji: 'tonde mo gozaimasen, shoushou omachi kudasai.', french: 'Pas de souci, un instant.' },
  ] },
  // me first — facture
  { id: 're-d-42', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, ryoushuusho ga hitsuyou na no desu ga, ate-saki wa ___ de.', french: 'Pardon, j\'ai besoin d\'une facture, au nom de ___.' },
    { speaker: 'them', romaji: 'kashikomari mashita, kakitsuke mairimasu.', french: 'C\'est noté, je m\'en occupe.' },
    { speaker: 'me', romaji: 'jikan wa kakarimasu ka?', french: 'Ça prend longtemps ?' },
    { speaker: 'them', romaji: 'goofun gurai de dekimasu.', french: 'Environ 5 minutes.' },
  ] },
  { id: 're-d-43', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'onamae wa nan to kaki-mashou ka?', french: 'À quel nom inscris-je ?' },
    { speaker: 'me', romaji: 'Pierre Dupont desu, gaikoku-jin no namae de sumi-masen.', french: 'Pierre Dupont, désolé pour le nom étranger.' },
    { speaker: 'them', romaji: 'tonde mo gozaimasen, supellingu o oshiete kudasai.', french: 'Pas de problème, donnez-moi l\'orthographe.' },
    { speaker: 'me', romaji: 'P-I-E-R-R-E, D-U-P-O-N-T desu.', french: 'P-I-E-R-R-E, D-U-P-O-N-T.' },
  ] },
  { id: 're-d-44', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'otsuri to reshiito de gozaimasu.', french: 'Voici votre monnaie et votre reçu.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, taihen oishikatta desu.', french: 'Merci, c\'était délicieux.' },
    { speaker: 'them', romaji: 'arigatou gozaimasu, mata oide kudasai.', french: 'Merci, revenez nous voir.' },
    { speaker: 'me', romaji: 'kanarazu mata kimasu.', french: 'Sans faute je reviendrai.' },
  ] },
  // me first — à emporter
  { id: 're-d-45', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'sumimasen, kore wa mochikaeri dekimasu ka?', french: 'Pardon, je peux emporter ça ?' },
    { speaker: 'them', romaji: 'mochiron desu, ikutsu ni nasaimasu ka?', french: 'Bien sûr, combien ?' },
    { speaker: 'me', romaji: 'futatsu onegaishimasu, atatamete kudasai.', french: 'Deux svp, et réchauffé svp.' },
    { speaker: 'them', romaji: 'shucchou-fukuro ni iremasu ka?', french: 'Je le mets dans un sac isotherme ?' },
  ] },
  { id: 're-d-46', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'kochira wa atsui mama de yoroshii desu ka?', french: 'On vous le donne chaud ?' },
    { speaker: 'me', romaji: 'hai, atsui mama de onegaishimasu, sugu tabemasu.', french: 'Oui chaud svp, je vais manger tout de suite.' },
    { speaker: 'them', romaji: 'shucchou-fukuro ni iremasu ka?', french: 'Je le mets dans un sac isotherme ?' },
    { speaker: 'me', romaji: 'mochiron, onegaishimasu.', french: 'Bien sûr, svp.' },
  ] },
  // me first — au revoir
  { id: 're-d-47', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'gochisousama deshita, totemo oishikatta desu.', french: 'Merci pour le repas, c\'était vraiment délicieux.' },
    { speaker: 'them', romaji: 'ureshii kotoba arigatou gozaimasu.', french: 'Heureux de l\'entendre, merci.' },
    { speaker: 'me', romaji: 'kyou wa hontou ni tanoshikatta desu, kanarazu mata kimasu.', french: 'C\'était vraiment sympa, je reviendrai sans faute.' },
    { speaker: 'them', romaji: 'omachi shite imasu, mata oide kudasai.', french: 'On vous attend, à bientôt.' },
  ] },
  { id: 're-d-48', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'hontou ni yokatta desu, tomodachi ni mo oshiemasu.', french: 'C\'était vraiment bien, je vais le dire à mes amis.' },
    { speaker: 'them', romaji: 'ureshii desu, tomodachi to mo zehi.', french: 'Ça nous fait plaisir, amenez-les avec vous.' },
    { speaker: 'me', romaji: 'kanarazu mata kimasu, sayounara.', french: 'Je reviendrai sans faute, au revoir.' },
    { speaker: 'them', romaji: 'sayounara, ki o tsukete o-kaeri kudasai.', french: 'Au revoir, rentrez bien.' },
  ] },
  { id: 're-d-49', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'hontou ni tanoshikatta desu, iroiro arigatou gozaimashita.', french: 'C\'était vraiment sympa, merci pour tout.' },
    { speaker: 'them', romaji: 'kochira koso, mata oide kudasai.', french: 'Tout le plaisir était pour nous, à bientôt.' },
    { speaker: 'me', romaji: 'kanarazu mata kimasu, ki o tsukete.', french: 'Je reviendrai, prenez soin de vous.' },
    { speaker: 'them', romaji: 'arigatou gozaimashita, sayounara.', french: 'Merci, au revoir.' },
  ] },
  { id: 're-d-50', situation: 'restaurant', turns: [
    { speaker: 'me', romaji: 'totemo yokatta desu, omakase ga tokuni kandou-teki deshita.', french: 'C\'était super, l\'omakase était particulièrement touchant.' },
    { speaker: 'them', romaji: 'sou itte itadakete shiawase desu.', french: 'Heureux que ça vous ait plu.' },
    { speaker: 'me', romaji: 'shefu ni mo yoroshiku otsutae kudasai.', french: 'Saluez le chef de ma part svp.' },
    { speaker: 'them', romaji: 'mochiron desu, kanarazu otsutae shimasu.', french: 'Bien sûr, je le lui dirai.' },
  ] },
];
