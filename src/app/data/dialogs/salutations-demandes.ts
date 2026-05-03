import { Dialog } from '../../models/word.model';

export const SALUTATIONS_DIALOGS: Dialog[] = [
  // Salutations basiques (4 ID 01-05 avec sd-d-04 manquant)
  { id: 'sd-d-01', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'konnichiwa, kyou wa atsui desu ne.', french: 'Bonjour, il fait chaud aujourd\'hui hein.' },
    { speaker: 'me', romaji: 'konnichiwa, hontou ni atsui desu ne.', french: 'Bonjour, il fait vraiment chaud oui.' },
    { speaker: 'them', romaji: 'tabemono ga wakaranakute komatte imasu ka?', french: 'Vous cherchez de quoi manger ?' },
    { speaker: 'me', romaji: 'iie, daijoubu desu, tada sanpo shite imasu.', french: 'Non, ça va, je me promène juste.' },
  ] },
  { id: 'sd-d-02', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'ohayou gozaimasu, hayai desu ne.', french: 'Bonjour, vous êtes matinal !' },
    { speaker: 'me', romaji: 'ohayou gozaimasu, choushoku ni ikimasu.', french: 'Bonjour, je vais petit-déjeuner.' },
    { speaker: 'them', romaji: 'ii ichi-nichi o.', french: 'Bonne journée à vous.' },
    { speaker: 'me', romaji: 'arigatou, anata mo.', french: 'Merci, à vous aussi.' },
  ] },
  { id: 'sd-d-03', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'konbanwa, oshigoto-ato desu ka?', french: 'Bonsoir, vous sortez du travail ?' },
    { speaker: 'me', romaji: 'konbanwa, iie, kankou-chuu desu.', french: 'Bonsoir, non, je suis en visite.' },
    { speaker: 'them', romaji: 'sou desu ka, tanoshinde kudasai.', french: 'Ah bon, profitez bien.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, oyasumi nasai.', french: 'Merci, bonne nuit.' },
  ] },
  { id: 'sd-d-05', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'sayounara.', french: 'Au revoir.' },
    { speaker: 'me', romaji: 'sayounara, taihen tanoshikatta desu.', french: 'Au revoir, c\'était très sympa.' },
    { speaker: 'them', romaji: 'kochira koso, mata aimashou.', french: 'Pareil, à la prochaine.' },
    { speaker: 'me', romaji: 'mata zehi, ki o tsukete.', french: 'Avec plaisir, prenez soin de vous.' },
  ] },
  { id: 'sd-d-06', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'ogenki desu ka?', french: 'Comment allez-vous ?' },
    { speaker: 'me', romaji: 'okagesama de genki desu, anata wa?', french: 'Grâce à vous ça va, et vous ?' },
    { speaker: 'them', romaji: 'watashi mo genki desu, arigatou.', french: 'Je vais bien aussi, merci.' },
    { speaker: 'me', romaji: 'yokatta desu, ii ichi-nichi o.', french: 'Tant mieux, bonne journée.' },
  ] },
  { id: 'sd-d-07', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'saikin dou desu ka?', french: 'Comment ça va ces temps-ci ?' },
    { speaker: 'me', romaji: 'mainichi atsui desu kedo, tanoshinde imasu.', french: 'Il fait chaud chaque jour mais je profite.' },
    { speaker: 'them', romaji: 'sou desu ka, mizu o nonde kudasai.', french: 'Ah bon, buvez de l\'eau.' },
    { speaker: 'me', romaji: 'hai, kio tsukete imasu, arigatou.', french: 'Oui je fais attention, merci.' },
  ] },
  { id: 'sd-d-08', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'tsukaresou desu ne, daijoubu desu ka?', french: 'Vous avez l\'air fatigué, ça va ?' },
    { speaker: 'me', romaji: 'sukoshi tsukareteimasu, takusan aruki-mashita.', french: 'Un peu fatigué oui, j\'ai beaucoup marché.' },
    { speaker: 'them', romaji: 'asoko no kafe de yasumimasu ka?', french: 'On va se reposer au café là-bas ?' },
    { speaker: 'me', romaji: 'ii desu ne, sou shimashou.', french: 'Bonne idée, faisons ça.' },
  ] },
  { id: 'sd-d-09', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'hajimemashite, Yamada to moushimasu.', french: 'Enchanté, je m\'appelle Yamada.' },
    { speaker: 'me', romaji: 'hajimemashite, Pierre desu, yoroshiku onegaishimasu.', french: 'Enchanté, Pierre, je compte sur vous.' },
    { speaker: 'them', romaji: 'kochira koso yoroshiku onegaishimasu.', french: 'Moi de même.' },
    { speaker: 'me', romaji: 'oai dekite ureshii desu.', french: 'Ravi de vous rencontrer.' },
  ] },
  { id: 'sd-d-10', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'onamae wa nan desu ka?', french: 'Comment vous appelez-vous ?' },
    { speaker: 'me', romaji: 'Pierre to moushimasu, doumo yoroshiku.', french: 'Je m\'appelle Pierre, ravi de vous rencontrer.' },
    { speaker: 'them', romaji: 'Pierre-san desu ne, oboe-mashita.', french: 'M. Pierre donc, c\'est noté.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, anata no onamae wa?', french: 'Merci, et vous comment vous appelez-vous ?' },
  ] },
  { id: 'sd-d-11', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'doko kara kimashita ka?', french: 'D\'où venez-vous ?' },
    { speaker: 'me', romaji: 'furansu, Pari kara kimashita.', french: 'Je viens de France, de Paris.' },
    { speaker: 'them', romaji: 'Pari desu ka, ii desu ne, hatsumete no Nihon desu ka?', french: 'Paris, sympa ! C\'est votre premier voyage au Japon ?' },
    { speaker: 'me', romaji: 'hai, hatsumete desu, totemo tanoshinde imasu.', french: 'Oui, c\'est mon premier, je profite beaucoup.' },
  ] },
  // Compliments / remerciements
  { id: 'sd-d-14', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'nihongo ga jouzu desu ne.', french: 'Vous parlez bien japonais.' },
    { speaker: 'me', romaji: 'iie, mada mada benkyouchuu desu.', french: 'Non, je suis encore en train d\'apprendre.' },
    { speaker: 'them', romaji: 'iya, hontou ni jouzu desu yo.', french: 'Si, vraiment vous parlez bien.' },
    { speaker: 'me', romaji: 'osoreirimasu, hage-mi ni narimasu.', french: 'Vous me flattez, ça m\'encourage.' },
  ] },
  { id: 'sd-d-15', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'arigatou gozaimasu, totemo tasukarimashita.', french: 'Merci beaucoup, vous m\'avez bien aidé.' },
    { speaker: 'me', romaji: 'doitashimashite, otagai-sama desu.', french: 'De rien, c\'est réciproque.' },
    { speaker: 'them', romaji: 'mata komari mashitara, oyobi shite kudasai.', french: 'Si vous avez encore un souci, appelez-moi.' },
    { speaker: 'me', romaji: 'arigatou, kokoro-zuyoi desu.', french: 'Merci, ça me rassure.' },
  ] },
  { id: 'sd-d-16', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'doumo arigatou, oishikatta desu.', french: 'Merci beaucoup, c\'était bon.' },
    { speaker: 'me', romaji: 'iie, daijoubu desu, kochira koso doumo.', french: 'Pas de souci, c\'est moi qui vous remercie.' },
    { speaker: 'them', romaji: 'mata oishii mise o oshie-masu yo.', french: 'Je vous indiquerai d\'autres bonnes adresses.' },
    { speaker: 'me', romaji: 'tanoshimi ni shite imasu.', french: 'J\'ai hâte.' },
  ] },
  { id: 'sd-d-17', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'tasukatte arigatou.', french: 'Merci pour l\'aide.' },
    { speaker: 'me', romaji: 'tonde mo arimasen, tsuide deshita kara.', french: 'Pas du tout, c\'était sur mon chemin.' },
    { speaker: 'them', romaji: 'hontou ni iroiro arigatou gozaimasu.', french: 'Vraiment merci pour tout.' },
    { speaker: 'me', romaji: 'iie, ki ni shinaide kudasai.', french: 'Non, ne vous inquiétez pas.' },
  ] },
  // Excuses
  { id: 'sd-d-18', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'sumimasen, chotto ii desu ka?', french: 'Excusez-moi, vous avez un instant ?' },
    { speaker: 'me', romaji: 'hai, nan desu ka, douzo.', french: 'Oui, qu\'y a-t-il, je vous écoute.' },
    { speaker: 'them', romaji: 'shashin o totte itadakemasu ka?', french: 'Pourriez-vous prendre une photo de nous ?' },
    { speaker: 'me', romaji: 'mochiron desu, kochira no kamera de ii desu ka?', french: 'Bien sûr, avec cet appareil ?' },
  ] },
  { id: 'sd-d-19', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'gomennasai, fukugu shite shimaimashita.', french: 'Pardon, je vous ai bousculé.' },
    { speaker: 'me', romaji: 'iie, ki ni shinaide kudasai, daijoubu desu.', french: 'Non, ne vous en faites pas, ça va.' },
    { speaker: 'them', romaji: 'okega wa arimasen ka?', french: 'Vous n\'êtes pas blessé ?' },
    { speaker: 'me', romaji: 'mondai arimasen, gozenpyou-sama deshita.', french: 'Aucun souci, vous étiez pressé.' },
  ] },
  { id: 'sd-d-20', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'okuremashita, hontou ni sumimasen.', french: 'Désolé, vraiment en retard.' },
    { speaker: 'me', romaji: 'daijoubu desu yo, dou-shi-mashita ka?', french: 'C\'est rien, qu\'est-ce qui vous est arrivé ?' },
    { speaker: 'them', romaji: 'densha ga okure-mashita.', french: 'Le train a eu du retard.' },
    { speaker: 'me', romaji: 'aa, sou desu ka, ki ni shinaide.', french: 'Ah ok, ne vous en faites pas.' },
  ] },
  // Aide
  { id: 'sd-d-21', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'tetsudai-mashou ka?', french: 'Voulez-vous que je vous aide ?' },
    { speaker: 'me', romaji: 'onegai dekimasu ka? kono nimotsu ga omoi n desu.', french: 'Je peux vous demander svp ? Ces bagages sont lourds.' },
    { speaker: 'them', romaji: 'mochiron, douko made desu ka?', french: 'Bien sûr, jusqu\'où ?' },
    { speaker: 'me', romaji: 'eki no kaisatsu made onegaishimasu.', french: 'Jusqu\'au portique de la gare svp.' },
  ] },
  { id: 'sd-d-22', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'nani ka komatte imasu ka?', french: 'Vous avez un souci ?' },
    { speaker: 'me', romaji: 'hai, michi ni mayoimashita, hoteru ga doko ka wakaranakute.', french: 'Oui, je suis perdu, je ne sais pas où est mon hôtel.' },
    { speaker: 'them', romaji: 'hoteru no namae o oshiete kudasai.', french: 'Donnez-moi le nom de l\'hôtel.' },
    { speaker: 'me', romaji: 'XYZ hoteru desu, basho wa wakari masu ka?', french: 'L\'hôtel XYZ, vous voyez où c\'est ?' },
  ] },
  { id: 'sd-d-23', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'daijoubu desu ka? tateiru no ga taihen sou desu.', french: 'Ça va ? Vous avez l\'air d\'avoir du mal à tenir debout.' },
    { speaker: 'me', romaji: 'sukoshi tsukareta dake desu, suwaru basho wa arimasu ka?', french: 'Juste un peu fatigué, y a-t-il un endroit pour s\'asseoir ?' },
    { speaker: 'them', romaji: 'asoko no benchi ga aite imasu yo.', french: 'Le banc là-bas est libre.' },
    { speaker: 'me', romaji: 'arigatou, soko de yasumimasu.', french: 'Merci, je vais m\'y reposer.' },
  ] },
  { id: 'sd-d-24', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'nani o sagashite imasu ka?', french: 'Que cherchez-vous ?' },
    { speaker: 'me', romaji: 'eki o sagashite imasu, koko kara aruite ikemasu ka?', french: 'Je cherche la gare, on peut y aller à pied ?' },
    { speaker: 'them', romaji: 'hai, juppun gurai desu yo.', french: 'Oui, environ 10 minutes.' },
    { speaker: 'me', romaji: 'soko made michi-jun o oshiete kudasai.', french: 'Pouvez-vous m\'indiquer le chemin ?' },
  ] },
  // Téléphone
  { id: 'sd-d-25', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'moshimoshi?', french: 'Allô ?' },
    { speaker: 'me', romaji: 'moshimoshi, Pierre desu, ima yoroshii deshou ka?', french: 'Allô, c\'est Pierre, c\'est un bon moment ?' },
    { speaker: 'them', romaji: 'hai, daijoubu desu, dou shimashita ka?', french: 'Oui c\'est ok, qu\'y a-t-il ?' },
    { speaker: 'me', romaji: 'machiawase no jikan o henkou shitai n desu.', french: 'Je voudrais changer notre rendez-vous.' },
  ] },
  // Compréhension
  { id: 'sd-d-26', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'wakarimashita ka?', french: 'Avez-vous compris ?' },
    { speaker: 'me', romaji: 'sumimasen, sukoshi muzukashii desu, mou ichido onegai dekimasu ka?', french: 'Pardon, c\'est un peu dur, vous pouvez répéter ?' },
    { speaker: 'them', romaji: 'mochiron, yukkuri ii-masu ne.', french: 'Bien sûr, je redis lentement.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, jouzu ni nattara ureshii desu.', french: 'Merci, j\'aimerais m\'améliorer.' },
  ] },
  { id: 'sd-d-27', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'eigo ga hanasemasu ka?', french: 'Parlez-vous anglais ?' },
    { speaker: 'me', romaji: 'hai, eigo wa daijoubu desu, demo nihongo mo benkyou-chuu desu.', french: 'Oui, l\'anglais ça va, mais j\'apprends aussi le japonais.' },
    { speaker: 'them', romaji: 'aa, sou desu ka, dochira de mo daijoubu desu.', french: 'Ah ok, l\'un ou l\'autre ça marche.' },
    { speaker: 'me', romaji: 'nihongo de hanashite kudasai, renshuu ni narimasu.', french: 'Parlez-moi en japonais, ça me fait pratiquer.' },
  ] },
  { id: 'sd-d-28', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'yukkuri hanashimashou ka?', french: 'Voulez-vous que je parle plus lentement ?' },
    { speaker: 'me', romaji: 'hai, onegaishimasu, kantan na nihongo de.', french: 'Oui svp, en japonais simple.' },
    { speaker: 'them', romaji: 'wakari mashita, yukkuri to kantan ni hanashimasu.', french: 'D\'accord, je parle lentement et simplement.' },
    { speaker: 'me', romaji: 'tasukari masu, doumo arigatou gozaimasu.', french: 'Ça aide bien, merci beaucoup.' },
  ] },
  { id: 'sd-d-29', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'kore wa nan desu ka?', french: 'Qu\'est-ce que c\'est ?' },
    { speaker: 'me', romaji: 'kore wa furansu kara no omiyage desu.', french: 'C\'est un souvenir de France.' },
    { speaker: 'them', romaji: 'aa, sugoi, douzo ne!', french: 'Oh super, merci !' },
    { speaker: 'me', romaji: 'sukoshi dake desu ga, oishii desu yo.', french: 'C\'est juste un petit truc, mais c\'est bon.' },
  ] },
  // Politesse
  { id: 'sd-d-30', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'youkoso!', french: 'Bienvenue !' },
    { speaker: 'me', romaji: 'ojama shimasu, oseiwa ni narimasu.', french: 'Pardon de vous déranger, merci de m\'accueillir.' },
    { speaker: 'them', romaji: 'mainichi ki o tsukete kudasai.', french: 'Faites attention chaque jour.' },
    { speaker: 'me', romaji: 'hai, kanarazu ki o tsukemasu.', french: 'Oui, je fais bien attention.' },
  ] },
  { id: 'sd-d-31', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'douzo, ohairi kudasai.', french: 'Je vous en prie, entrez.' },
    { speaker: 'me', romaji: 'shitsurei shimasu, ojama shimasu.', french: 'Pardon, je vous dérange.' },
    { speaker: 'them', romaji: 'iie, douzo goyukkuri.', french: 'Non, prenez votre temps.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, sumimasen.', french: 'Merci, pardon.' },
  ] },
  { id: 'sd-d-32', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'ki o tsukete kudasai, michi ga subetai desu.', french: 'Faites attention, la rue est glissante.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, kio tsukete arukimasu.', french: 'Merci, je vais marcher prudemment.' },
    { speaker: 'them', romaji: 'tasshou ni okaeri kudasai.', french: 'Rentrez bien.' },
    { speaker: 'me', romaji: 'iroiro arigatou gozaimashita.', french: 'Merci pour tout.' },
  ] },
  { id: 'sd-d-33', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'itterasshai, jikan ni ki o tsukete.', french: 'Va et reviens, fais attention à l\'heure.' },
    { speaker: 'me', romaji: 'ittekimasu, juu-ji goro modori-masu.', french: 'J\'y vais, je rentre vers 22h.' },
    { speaker: 'them', romaji: 'hai, kagi o motte ikimashita ka?', french: 'D\'accord, tu as pris la clé ?' },
    { speaker: 'me', romaji: 'hai, motte iki-mashita, mata atode.', french: 'Oui je l\'ai prise, à plus tard.' },
  ] },
  { id: 'sd-d-34', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'okaerinasai, otsukaresama deshita.', french: 'Bienvenue à la maison, bon retour.' },
    { speaker: 'me', romaji: 'tadaima, kyou wa takusan aruki-mashita.', french: 'Je suis rentré, j\'ai beaucoup marché aujourd\'hui.' },
    { speaker: 'them', romaji: 'gohan no jikan desu, douzo.', french: 'C\'est l\'heure du repas.' },
    { speaker: 'me', romaji: 'arigatou, sugu te o arai-masu.', french: 'Merci, je me lave les mains tout de suite.' },
  ] },
  // Souhaits
  { id: 'sd-d-37', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'ogenki de.', french: 'Portez-vous bien.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, anata mo karada ni ki o tsukete.', french: 'Merci, vous aussi, prenez soin de vous.' },
    { speaker: 'them', romaji: 'mata aeru hi o tanoshimi ni shite imasu.', french: 'J\'attends de vous revoir avec impatience.' },
    { speaker: 'me', romaji: 'kanarazu mata aimashou.', french: 'On se reverra sans faute.' },
  ] },
  // Au revoir
  { id: 'sd-d-38', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'mata ashita.', french: 'À demain.' },
    { speaker: 'me', romaji: 'mata ashita, asagohan no jikan ni aimashou.', french: 'À demain, on se voit pour le petit-déj.' },
    { speaker: 'them', romaji: 'hai, hachi-ji ni roubii de ne.', french: 'Oui, à 8h dans le lobby.' },
    { speaker: 'me', romaji: 'wakari-mashita, oyasumi nasai.', french: 'C\'est noté, bonne nuit.' },
  ] },
  { id: 'sd-d-39', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'matane!', french: 'À plus !' },
    { speaker: 'me', romaji: 'matane, raishuu mata renraku shimasu.', french: 'À plus, je te recontacte la semaine prochaine.' },
    { speaker: 'them', romaji: 'hai, tanoshimi ni shite-iru.', french: 'Oui, j\'ai hâte.' },
    { speaker: 'me', romaji: 'kochira mo, ki o tsukete.', french: 'Pareil pour moi, prends soin de toi.' },
  ] },
  { id: 'sd-d-40', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'ki o tsukete kaette ne.', french: 'Rentre bien.' },
    { speaker: 'me', romaji: 'arigatou, takushii o yobimashou ka?', french: 'Merci, on appelle un taxi ?' },
    { speaker: 'them', romaji: 'iya, basu de daijoubu desu.', french: 'Non, le bus suffit.' },
    { speaker: 'me', romaji: 'wakari-mashita, mata renraku suru ne.', french: 'D\'accord, je te recontacte.' },
  ] },
  // Quotidien
  { id: 'sd-d-41', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'nan ka goyou desu ka?', french: 'Vous avez besoin de quelque chose ?' },
    { speaker: 'me', romaji: 'hai, kono atari ni atemu ga arimasu ka?', french: 'Oui, y a-t-il un distributeur dans le coin ?' },
    { speaker: 'them', romaji: 'hai, konbini no naka ni arimasu yo.', french: 'Oui, dans la supérette.' },
    { speaker: 'me', romaji: 'sou desu ka, soko ni ikimasu, arigatou.', french: 'Ah ok, j\'y vais, merci.' },
  ] },
  { id: 'sd-d-43', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'koohii wa ikaga desu ka? mokutekibi de.', french: 'Voulez-vous un café ? J\'en commande un aussi.' },
    { speaker: 'me', romaji: 'onegai shimasu, miruku iri de onegai dekimasu ka?', french: 'Oui svp, avec du lait svp.' },
    { speaker: 'them', romaji: 'satou wa ikaga desu ka?', french: 'Du sucre ?' },
    { speaker: 'me', romaji: 'satou wa irimasen, miruku dake de.', french: 'Pas de sucre, juste le lait.' },
  ] },
  // Direction & temps
  { id: 'sd-d-46', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'nan-ji ni kimasu ka?', french: 'À quelle heure venez-vous ?' },
    { speaker: 'me', romaji: 'san-ji goro ni ikitai n desu ga, daijoubu desu ka?', french: 'Je voulais venir vers 15h, ça vous va ?' },
    { speaker: 'them', romaji: 'mondai arimasen, omachi shite imasu.', french: 'Pas de souci, je vous attends.' },
    { speaker: 'me', romaji: 'arigatou, jikan dori ni ikimasu.', french: 'Merci, j\'arrive à l\'heure.' },
  ] },
  { id: 'sd-d-47', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'doko ni ikimasu ka?', french: 'Où allez-vous ?' },
    { speaker: 'me', romaji: 'eki ni ikimasu, isshou ni ikimashou ka?', french: 'Je vais à la gare, on y va ensemble ?' },
    { speaker: 'them', romaji: 'ii desu yo, watashi mo onaji houkou desu.', french: 'D\'accord, je vais dans la même direction.' },
    { speaker: 'me', romaji: 'yokatta desu, ja issho ni ikimashou.', french: 'Tant mieux, allons-y ensemble.' },
  ] },
  { id: 'sd-d-48', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'itsu kaerimasu ka?', french: 'Quand rentrez-vous ?' },
    { speaker: 'me', romaji: 'raishuu no kayoubi ni kaerimasu, sore made tanoshimimasu.', french: 'Je rentre mardi prochain, je profite jusque-là.' },
    { speaker: 'them', romaji: 'mada jikan ga arimasu ne, ii koto desu ne.', french: 'Vous avez encore du temps, c\'est cool.' },
    { speaker: 'me', romaji: 'hai, mada hoka no toshi ni mo iku yotei desu.', french: 'Oui, je prévois encore d\'autres villes.' },
  ] },
  // Petite conversation
  { id: 'sd-d-49', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'ii tenki desu ne.', french: 'Il fait beau hein.' },
    { speaker: 'me', romaji: 'hai, hontou ni, kankou ni piittari desu.', french: 'Oui, vraiment, parfait pour visiter.' },
    { speaker: 'them', romaji: 'kyou wa doko ni ikimasu ka?', french: 'Vous allez où aujourd\'hui ?' },
    { speaker: 'me', romaji: 'Asakusa no Senso-ji ni ikimasu.', french: 'Au Sensō-ji à Asakusa.' },
  ] },
  { id: 'sd-d-50', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'atsui desu ne, kyou wa.', french: 'Il fait chaud aujourd\'hui hein.' },
    { speaker: 'me', romaji: 'hai, totemo atsui desu, mizu ga hoshii desu.', french: 'Oui, très chaud, j\'ai envie d\'eau.' },
    { speaker: 'them', romaji: 'asoko no jihanki de kaemasu yo.', french: 'Vous pouvez en acheter au distributeur là-bas.' },
    { speaker: 'me', romaji: 'arigatou, sugu kai ni iki-masu.', french: 'Merci, j\'y vais tout de suite.' },
  ] },
];
