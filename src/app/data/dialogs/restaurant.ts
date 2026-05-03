import { Dialog } from '../../models/word.model';

export const RESTAURANT_DIALOGS: Dialog[] = [
  // Réservation par téléphone
  { id: 're-d-01', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'moshimoshi, ___ resutoran de gozaimasu.', french: 'Allô, ici le restaurant ___.' },
    { speaker: 'me', romaji: 'konbanwa, yoyaku o onegaishitai n desu ga.', french: 'Bonsoir, je voudrais faire une réservation.' },
    { speaker: 'them', romaji: 'kashikomarimashita, itsu no goryouri desu ka?', french: 'C\'est noté, pour quel jour ?' },
    { speaker: 'me', romaji: 'asu no yoru, futari de onegaishimasu.', french: 'Demain soir, pour deux personnes svp.' },
  ] },
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
  { id: 're-d-04', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'onamae o douzo.', french: 'Votre nom svp.' },
    { speaker: 'me', romaji: 'Pierre to moushimasu, supellingu wa P-i-e-r-r-e desu.', french: 'Je m\'appelle Pierre, P-i-e-r-r-e.' },
    { speaker: 'them', romaji: 'arigatou gozaimasu, Pierre-sama de uketamawari masu.', french: 'Merci, j\'enregistre au nom de M. Pierre.' },
    { speaker: 'me', romaji: 'sumimasen, hokano johou ga hitsuyou desu ka?', french: 'Pardon, vous avez besoin d\'autres infos ?' },
  ] },
  { id: 're-d-05', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'odenwa-bangou wa?', french: 'Votre numéro de téléphone ?' },
    { speaker: 'me', romaji: 'zero-kyuu-zero no ___ desu, mou ichido ii-mashou ka?', french: 'C\'est le 090-___, je le redis ?' },
    { speaker: 'them', romaji: 'onegai itashimasu, mou ichido yukkuri.', french: 'Oui svp, encore une fois lentement.' },
    { speaker: 'me', romaji: 'wakari mashita, zero, kyuu, zero, ___.', french: 'D\'accord : 0, 9, 0, ___.' },
  ] },
  // Arrivée
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
  { id: 're-d-08', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'nanmei-sama desu ka?', french: 'Vous êtes combien ?' },
    { speaker: 'me', romaji: 'futari desu, yoyaku wa shite imasen, daijoubu desu ka?', french: 'Deux, pas de réservation, c\'est ok ?' },
    { speaker: 'them', romaji: 'sukoshi omachi itadakimasu ga, daijoubu desu yo.', french: 'Un peu d\'attente mais c\'est ok.' },
    { speaker: 'me', romaji: 'wakarimashita, machimasu.', french: 'D\'accord, j\'attends.' },
  ] },
  { id: 're-d-09', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'kitsuen-seki to kinen-seki, dochira ga yoroshii desu ka?', french: 'Fumeur ou non-fumeur ?' },
    { speaker: 'me', romaji: 'kinen-seki onegaishimasu, mado no chikaku ga ii desu.', french: 'Non-fumeur svp, près de la fenêtre serait bien.' },
    { speaker: 'them', romaji: 'mado-gawa wa ainiku ippai desu.', french: 'La fenêtre est malheureusement complète.' },
    { speaker: 'me', romaji: 'sou desu ka, ja kinen-seki dake de daijoubu desu.', french: 'Ah, alors juste non-fumeur ça ira.' },
  ] },
  { id: 're-d-10', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'teeburu to kauntaa, dochira ga yoroshii desu ka?', french: 'Table ou comptoir ?' },
    { speaker: 'me', romaji: 'kauntaa de onegaishimasu, shefu o miteitai desu.', french: 'Au comptoir svp, j\'aimerais voir le chef.' },
    { speaker: 'them', romaji: 'subarashii sentaku desu ne, kochira douzo.', french: 'Excellent choix, par ici.' },
    { speaker: 'me', romaji: 'tanoshimi desu.', french: 'J\'ai hâte.' },
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
  // Boissons
  { id: 're-d-13', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'onomimono wa ikaga desu ka?', french: 'Que désirez-vous boire ?' },
    { speaker: 'me', romaji: 'biiru o ippai to ocha o ippai onegaishimasu.', french: 'Une bière et un thé vert svp.' },
    { speaker: 'them', romaji: 'biiru wa nama de yoroshii desu ka?', french: 'Bière pression ?' },
    { speaker: 'me', romaji: 'hai, nama biiru de.', french: 'Oui, en pression.' },
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
  // Conseil & spécialité
  { id: 're-d-16', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'osusume wa kochira desu, kyou wa shinsen na sashimi ga arimasu.', french: 'Voici notre recommandation, on a du sashimi frais.' },
    { speaker: 'me', romaji: 'sashimi wa daisuki desu, sore ni shimasu.', french: 'J\'adore le sashimi, je prends ça.' },
    { speaker: 'them', romaji: 'omakase mo gozaimasu, ikaga desu ka?', french: 'On a aussi l\'omakase, ça vous tente ?' },
    { speaker: 'me', romaji: 'omakase de onegaishimasu, tanoshimi desu.', french: 'Omakase svp, j\'ai hâte.' },
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
  { id: 're-d-19', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'kisetsu no shokuzai mo arimasu yo.', french: 'On a aussi des produits de saison.' },
    { speaker: 'me', romaji: 'kisetsu no nani ga osusume desu ka?', french: 'Qu\'est-ce que vous recommandez en ce moment ?' },
    { speaker: 'them', romaji: 'matsutake to sanma ga ima ichiban yoi desu.', french: 'Le matsutake et le sanma sont au top.' },
    { speaker: 'me', romaji: 'sanma wa hatsumete desu, tabete mitai desu.', french: 'Je n\'ai jamais goûté le sanma, je veux essayer.' },
  ] },
  // Commande
  { id: 're-d-20', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'gochuumon wa okimari desu ka?', french: 'Avez-vous choisi ?' },
    { speaker: 'me', romaji: 'hai, kore to kore o futatsu zutsu onegaishimasu.', french: 'Oui, deux de chaque svp.' },
    { speaker: 'them', romaji: 'gosenkou de gozaimasu, hoka ni gochuumon wa?', french: 'Excellent choix, autre chose ?' },
    { speaker: 'me', romaji: 'mizu o ippon onegai dekimasu ka?', french: 'Je peux avoir une bouteille d\'eau ?' },
  ] },
  { id: 're-d-21', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'kochira mo go-issho ni ikaga desu ka?', french: 'Et ceci aussi avec ?' },
    { speaker: 'me', romaji: 'oishi-sou desu ne, ja hitotsu dake onegaishimasu.', french: 'Ça a l\'air bon, alors juste un svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, hokani wa daijoubu desu ka?', french: 'C\'est noté, autre chose ?' },
    { speaker: 'me', romaji: 'mada wakaranai node, ato de tanomimasu.', french: 'Je ne sais pas encore, je commanderai plus tard.' },
  ] },
  { id: 're-d-22', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'karasa wa dou shimasu ka?', french: 'Quel niveau de piquant ?' },
    { speaker: 'me', romaji: 'karai mono ga nigate na node, amakuchi de onegaishimasu.', french: 'Je n\'aime pas le piquant, alors doux svp.' },
    { speaker: 'them', romaji: 'kashikomari mashita, amakuchi ni shimasu.', french: 'C\'est noté, je le mets doux.' },
    { speaker: 'me', romaji: 'sumimasen, doumo arigatou gozaimasu.', french: 'Pardon, et merci beaucoup.' },
  ] },
  { id: 're-d-23', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'oniku no yakikata wa?', french: 'Pour la cuisson de la viande ?' },
    { speaker: 'me', romaji: 'midiamu de onegaishimasu, jyuushi-saito.', french: 'Saignant svp, juteux.' },
    { speaker: 'them', romaji: 'kashikomari mashita, midiamu reer ni mo dekimasu.', french: 'C\'est noté, on peut faire saignant intense aussi.' },
    { speaker: 'me', romaji: 'iie, futsuu no midiamu de daijoubu desu.', french: 'Non, saignant standard ça ira.' },
  ] },
  { id: 're-d-24', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'kono ryouri wa ebi to nattou ga haitte imasu.', french: 'Ce plat contient des crevettes et du nattō.' },
    { speaker: 'me', romaji: 'ebi ni arerugii ga aru node, kawari ga arimasu ka?', french: 'Je suis allergique aux crevettes, vous avez une alternative ?' },
    { speaker: 'them', romaji: 'tori no ban mo gozaimasu, sore wa ikaga desu ka?', french: 'On a aussi une version au poulet.' },
    { speaker: 'me', romaji: 'sore de onegaishimasu, oshiete kurete arigatou.', french: 'Celui-là svp, merci de m\'avoir prévenu.' },
  ] },
  // Service
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
    { speaker: 'me', romaji: 'hai, sukoshi sami-sama-shite tabe-masu.', french: 'Oui, je vais le laisser refroidir un peu.' },
    { speaker: 'them', romaji: 'douzo, oishiku omeshiagari kudasai.', french: 'Profitez bien.' },
    { speaker: 'me', romaji: 'iroiro arigatou gozaimasu.', french: 'Merci pour tout.' },
  ] },
  // Vérifications
  { id: 're-d-28', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'oaji wa ikaga desu ka?', french: 'Comment trouvez-vous le goût ?' },
    { speaker: 'me', romaji: 'totemo oishii desu, tokuni ano sauce ga subarashii desu.', french: 'Très bon, surtout cette sauce, formidable.' },
    { speaker: 'them', romaji: 'shefu ga yorokobimasu, otsutae shimasu.', french: 'Le chef sera content, je lui dirai.' },
    { speaker: 'me', romaji: 'onegaishimasu, kanshashite imasu.', french: 'Oui svp, je suis reconnaissant.' },
  ] },
  { id: 're-d-29', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'ato nani ka chuumon shimasu ka?', french: 'Voulez-vous commander autre chose ?' },
    { speaker: 'me', romaji: 'mou hitotsu nama biiru o onegaishimasu.', french: 'Encore une bière pression svp.' },
    { speaker: 'them', romaji: 'sugu omochi shimasu, hokani wa?', french: 'Tout de suite, autre chose ?' },
    { speaker: 'me', romaji: 'iie, sore de daijoubu desu, arigatou.', french: 'Non, c\'est bon, merci.' },
  ] },
  // Demander plus
  { id: 're-d-30', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'nani ka tarinai mono wa arimasu ka?', french: 'Manque-t-il quelque chose ?' },
    { speaker: 'me', romaji: 'mizu o mou sukoshi onegaishimasu, kara ni narimashita.', french: 'Encore un peu d\'eau svp, c\'est vide.' },
    { speaker: 'them', romaji: 'kashikomari mashita, sugu omochi shimasu.', french: 'C\'est noté, j\'apporte tout de suite.' },
    { speaker: 'me', romaji: 'arigatou, iroiro sumimasen.', french: 'Merci, désolé pour tout.' },
  ] },
  { id: 're-d-31', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'okawari ikaga desu ka?', french: 'On vous ressert ?' },
    { speaker: 'me', romaji: 'gohan dake mou sukoshi onegaishimasu.', french: 'Juste encore un peu de riz svp.' },
    { speaker: 'them', romaji: 'kashikomari mashita, jiro-jiro o-tsugi shimasu.', french: 'C\'est noté, je vous en sers à la louche.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu.', french: 'Merci.' },
  ] },
  // Coutumes
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
  // Fin du repas
  { id: 're-d-34', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'osara o osage shimasu.', french: 'Je débarrasse vos assiettes.' },
    { speaker: 'me', romaji: 'onegaishimasu, totemo oishikatta desu.', french: 'Oui svp, c\'était très bon.' },
    { speaker: 'them', romaji: 'arigatou gozaimasu, dezaato no menyuu desu.', french: 'Merci, voici le menu des desserts.' },
    { speaker: 'me', romaji: 'mite mimasu, kekkou tanoshimi desu.', french: 'Je regarde, ça me tente bien.' },
  ] },
  { id: 're-d-35', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'dezaato wa ikaga desu ka?', french: 'Un dessert ?' },
    { speaker: 'me', romaji: 'macha-aisu o onegaishimasu, futatsu de.', french: 'Une glace au matcha svp, deux.' },
    { speaker: 'them', romaji: 'kashikomarimashita, koohii mo ikaga desu ka?', french: 'C\'est noté, et un café aussi ?' },
    { speaker: 'me', romaji: 'koohii wa ato ni shimasu, arigatou.', french: 'Le café, plus tard, merci.' },
  ] },
  { id: 're-d-36', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'koohii wa ikaga desu ka?', french: 'Un café ?' },
    { speaker: 'me', romaji: 'iie, kekkou desu, ato de okaikei o onegaishimasu.', french: 'Non merci, mais l\'addition svp ensuite.' },
    { speaker: 'them', romaji: 'kashikomarimashita, sugu omochi shimasu.', french: 'C\'est noté, j\'apporte ça tout de suite.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu.', french: 'Merci.' },
  ] },
  // Paiement
  { id: 're-d-37', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'okaikei wa kochira ni narimasu.', french: 'Voici l\'addition.' },
    { speaker: 'me', romaji: 'arigatou, betsubetsu de oshiharai dekimasu ka?', french: 'Merci, on peut payer séparément ?' },
    { speaker: 'them', romaji: 'mochiron desu, hitori-bun zutsu kakari masu.', french: 'Bien sûr, on calcule par personne.' },
    { speaker: 'me', romaji: 'sou shimashou, onegaishimasu.', french: 'Faisons ça svp.' },
  ] },
  { id: 're-d-38', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'betsubetsu desu ka, isshou desu ka?', french: 'Séparément ou ensemble ?' },
    { speaker: 'me', romaji: 'betsubetsu de onegaishimasu, kaado de wari-kan dekimasu ka?', french: 'Séparément svp, on peut diviser sur la carte ?' },
    { speaker: 'them', romaji: 'mochiron desu, junbi shimasu.', french: 'Bien sûr, je prépare ça.' },
    { speaker: 'me', romaji: 'sumimasen, taisetsuni shimasu.', french: 'Pardon, et merci.' },
  ] },
  { id: 're-d-39', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'okaado de yoroshii desu ka?', french: 'Vous payez par carte ?' },
    { speaker: 'me', romaji: 'hai, kontakuto-resu wa tsukaemasu ka?', french: 'Oui, le sans contact ça marche ?' },
    { speaker: 'them', romaji: 'hai, kazashite kudasai.', french: 'Oui, posez-la.' },
    { speaker: 'me', romaji: 'kazashi mashita, owari desu ne.', french: 'Posée, c\'est fait.' },
  ] },
  { id: 're-d-40', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'anshou-bangou o nyuuryoku kudasai.', french: 'Tapez votre code PIN svp.' },
    { speaker: 'me', romaji: 'hai, ima nyuuryoku shimasu, sain wa irimasen ka?', french: 'Oui je le tape, pas besoin de signature ?' },
    { speaker: 'them', romaji: 'sain wa fuyou de gozaimasu.', french: 'Pas de signature.' },
    { speaker: 'me', romaji: 'wakari mashita, doumo arigatou.', french: 'D\'accord, merci.' },
  ] },
  { id: 're-d-41', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'reshiito wa goriyou desu ka?', french: 'Un reçu ?' },
    { speaker: 'me', romaji: 'onegaishimasu, kaisha-mei o ___ to kaite kudasai.', french: 'Oui svp, mettez le nom de société : ___.' },
    { speaker: 'them', romaji: 'kashikomarimashita, kaite mairimasu.', french: 'C\'est noté, je le rédige.' },
    { speaker: 'me', romaji: 'sumimasen, gomendou kake-masu.', french: 'Pardon de l\'embarras.' },
  ] },
  { id: 're-d-42', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'ryoushuusho wa irimasu ka?', french: 'Avez-vous besoin d\'une facture ?' },
    { speaker: 'me', romaji: 'hai, onegaishimasu, ate-saki wa ___ de.', french: 'Oui svp, au nom de ___.' },
    { speaker: 'them', romaji: 'kashikomari mashita, kakitsuke mairimasu.', french: 'C\'est noté, je m\'en occupe.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, jikan kakari masu ka?', french: 'Merci, ça prend longtemps ?' },
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
  // À emporter
  { id: 're-d-45', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'omochikaeri ni narimasu ka?', french: 'Vous emportez ?' },
    { speaker: 'me', romaji: 'hai, futatsu mochikaeri de onegaishimasu.', french: 'Oui, deux à emporter svp.' },
    { speaker: 'them', romaji: 'shoushou omachi kudasai, junbi shimasu.', french: 'Un instant svp, je prépare.' },
    { speaker: 'me', romaji: 'wakari-mashita, soto de matte imasu.', french: 'D\'accord, j\'attends dehors.' },
  ] },
  { id: 're-d-46', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'kochira wa atsui mama de yoroshii desu ka?', french: 'On vous le donne chaud ?' },
    { speaker: 'me', romaji: 'hai, atsui mama de onegaishimasu, sugu tabemasu.', french: 'Oui chaud svp, je vais manger tout de suite.' },
    { speaker: 'them', romaji: 'shucchou-fukuro ni iremasu ka?', french: 'Je le mets dans un sac isotherme ?' },
    { speaker: 'me', romaji: 'mochiron, onegaishimasu.', french: 'Bien sûr, svp.' },
  ] },
  // Au revoir
  { id: 're-d-47', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'doumo arigatou gozaimashita.', french: 'Merci beaucoup à vous.' },
    { speaker: 'me', romaji: 'gochisousama deshita, oishikatta desu, totemo ki ni iri-mashita.', french: 'Merci pour le repas, c\'était bon, j\'ai adoré.' },
    { speaker: 'them', romaji: 'ureshii kotoba arigatou gozaimasu.', french: 'Heureux de l\'entendre, merci.' },
    { speaker: 'me', romaji: 'kanarazu mata mainichi wa kima-su.', french: 'Sans faute, je reviendrai.' },
  ] },
  { id: 're-d-48', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'mata okoshi kudasaimase.', french: 'Revenez nous voir.' },
    { speaker: 'me', romaji: 'kanarazu mata kimasu, tomodachi ni mo oshie-masu.', french: 'Je reviendrai sans faute, je dirai à mes amis.' },
    { speaker: 'them', romaji: 'arigatou gozaimasu, tomodachi to mo zehi.', french: 'Merci, oui amenez-les avec plaisir.' },
    { speaker: 'me', romaji: 'sayounara, ki o tsukete.', french: 'Au revoir, prenez soin de vous.' },
  ] },
  { id: 're-d-49', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'ki o tsukete o-kaeri kudasai.', french: 'Rentrez bien.' },
    { speaker: 'me', romaji: 'arigatou gozaimashita, hontou ni tanoshikatta desu.', french: 'Merci, c\'était vraiment sympa.' },
    { speaker: 'them', romaji: 'kochira koso, kondo wa go-issho ni.', french: 'Tout le plaisir était pour nous, à la prochaine.' },
    { speaker: 'me', romaji: 'mata kimasu, sayounara.', french: 'Je reviendrai, au revoir.' },
  ] },
  { id: 're-d-50', situation: 'restaurant', turns: [
    { speaker: 'them', romaji: 'ikaga deshita ka?', french: 'Comment cela vous a-t-il plu ?' },
    { speaker: 'me', romaji: 'totemo yokatta desu, tokuni omakase ga kandou-teki deshita.', french: 'C\'était super, surtout l\'omakase, vraiment touchant.' },
    { speaker: 'them', romaji: 'sou itte itadakete shiawase desu.', french: 'Heureux que ça vous ait plu.' },
    { speaker: 'me', romaji: 'shefu ni mo yoroshiku otsutae kudasai.', french: 'Saluez le chef de ma part svp.' },
  ] },
];
