import { Dialog } from '../../models/word.model';

export const SALUTATIONS_DIALOGS: Dialog[] = [
  // Salutations basiques — them first
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
  // me first — présentations
  { id: 'sd-d-09', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'hajimemashite, Pierre to moushimasu, douzo yoroshiku.', french: 'Enchanté, je m\'appelle Pierre.' },
    { speaker: 'them', romaji: 'hajimemashite, Yamada to moushimasu, kochira koso.', french: 'Enchanté, moi c\'est Yamada, pareil.' },
    { speaker: 'me', romaji: 'Yamada-san desu ne, oai dekite kouei desu.', french: 'M. Yamada donc, ravi de vous rencontrer.' },
    { speaker: 'them', romaji: 'Nihon wa hatsumete desu ka?', french: 'C\'est votre premier voyage au Japon ?' },
  ] },
  { id: 'sd-d-10', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'sumimasen, watashi no namae wa Pierre desu, Furansu kara kimashita.', french: 'Excusez-moi, je m\'appelle Pierre, je viens de France.' },
    { speaker: 'them', romaji: 'aa, Furansu desu ka! youkoso, hajimemashite.', french: 'Ah France ! Bienvenue, enchanté.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, Nihon wa hatsumete de totemo tanoshii desu.', french: 'Merci, c\'est mon premier Japon et c\'est vraiment bien.' },
    { speaker: 'them', romaji: 'yokattara renraku-saki o oshiete kudasai.', french: 'Si vous voulez, donnez-moi votre contact.' },
  ] },
  { id: 'sd-d-11', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'sumimasen, Furansu no Pari kara kimashita, Nihon wa daisuki desu.', french: 'Pardon, je viens de Paris en France, j\'adore le Japon.' },
    { speaker: 'them', romaji: 'sou desu ka, youkoso! Nihon wa ikaga desu ka?', french: 'Vraiment, bienvenue ! Vous trouvez le Japon comment ?' },
    { speaker: 'me', romaji: 'subarashii desu, shokuji mo kankou mo totemo ii desu.', french: 'Super, la cuisine et les visites sont excellentes.' },
    { speaker: 'them', romaji: 'ureshii desu ne, osusume no basho o oshiete agemasu yo.', french: 'Ça fait plaisir, je peux vous recommander des endroits.' },
  ] },
  // them first — compliments / remerciements
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
  // me first — remerciements
  { id: 'sd-d-16', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'kyou wa iroiro tasukatte itadaite, hontou ni kansha shimasu.', french: 'Aujourd\'hui vous m\'avez vraiment aidé, je suis reconnaissant.' },
    { speaker: 'them', romaji: 'doitashimashite, otagai-sama desu.', french: 'De rien, c\'est réciproque.' },
    { speaker: 'me', romaji: 'iie, jibun de wa muzukashikatta to omoimasu.', french: 'Sans vous ça aurait été dur.' },
    { speaker: 'them', romaji: 'mata nanika attara itsudemo douzo.', french: 'Si quelque chose se passe, n\'hésitez pas.' },
  ] },
  // them first — excuses
  { id: 'sd-d-17', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'tasukatte arigatou.', french: 'Merci pour l\'aide.' },
    { speaker: 'me', romaji: 'tonde mo arimasen, tsuide deshita kara.', french: 'Pas du tout, c\'était sur mon chemin.' },
    { speaker: 'them', romaji: 'hontou ni iroiro arigatou gozaimasu.', french: 'Vraiment merci pour tout.' },
    { speaker: 'me', romaji: 'iie, ki ni shinaide kudasai.', french: 'Non, ne vous inquiétez pas.' },
  ] },
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
  // them first — aide
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
  // me first — demande de direction
  { id: 'sd-d-24', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'sumimasen, kono chikaku ni eki wa arimasu ka?', french: 'Pardon, y a-t-il une gare près d\'ici ?' },
    { speaker: 'them', romaji: 'hai, massugu itte futatsume no shingou de migi desu.', french: 'Oui, tout droit et au 2e feu à droite.' },
    { speaker: 'me', romaji: 'aruite nan-pun gurai kakarimasu ka?', french: 'C\'est à combien de minutes à pied ?' },
    { speaker: 'them', romaji: 'juppun gurai desu yo.', french: 'Environ 10 minutes.' },
  ] },
  // me first — téléphone
  { id: 'sd-d-25', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'moshimoshi, Pierre desu, ima yoroshii desu ka?', french: 'Allô, c\'est Pierre, c\'est un bon moment ?' },
    { speaker: 'them', romaji: 'aa Pierre-san, mochiron, dou shimashita ka?', french: 'Ah M. Pierre, bien sûr, que se passe-t-il ?' },
    { speaker: 'me', romaji: 'kyou no machiawase, sukoshi okureru kamoshiremasen.', french: 'Pour notre rendez-vous, je risque d\'être un peu en retard.' },
    { speaker: 'them', romaji: 'daijoubu desu yo, nan-ji goro ni narimasu ka?', french: 'Pas de souci, vous arrivez vers quelle heure ?' },
  ] },
  // me first — compréhension
  { id: 'sd-d-26', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'sumimasen, mou ichido itte itadakemasu ka? yoku kikoe-masen deshita.', french: 'Pardon, vous pouvez répéter ? Je n\'ai pas bien entendu.' },
    { speaker: 'them', romaji: 'mochiron desu, yukkuri ii-masu ne.', french: 'Bien sûr, je le redis lentement.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, nihongo ga mada muzukashii desu.', french: 'Merci, le japonais reste difficile pour moi.' },
    { speaker: 'them', romaji: 'daijobu desu, kantan na kotoba de hanashimasu.', french: 'Pas de souci, je parle avec des mots simples.' },
  ] },
  { id: 'sd-d-27', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'sumimasen, eigo wa sukoshi hanasemasu ka? nihongo ga mada heta de.', french: 'Pardon, vous parlez un peu anglais ? Mon japonais est encore maladroit.' },
    { speaker: 'them', romaji: 'sukoshi dake desu ga, nihongo no hou ga ii desu yo, renshuu ni naru kara.', french: 'Un peu, mais le japonais c\'est mieux pour vous, pour l\'entraînement.' },
    { speaker: 'me', romaji: 'sou desu ne, ja nihongo de onegaishimasu.', french: 'C\'est vrai, alors en japonais svp.' },
    { speaker: 'them', romaji: 'wakaranakattara nan demo kiite kudasai.', french: 'Si vous ne comprenez pas, demandez.' },
  ] },
  { id: 'sd-d-28', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'sumimasen, motto yukkuri hanashite itadakemasu ka?', french: 'Pardon, vous pouvez parler plus lentement ?' },
    { speaker: 'them', romaji: 'mochiron desu, dono atari ga wakaranakatta desu ka?', french: 'Bien sûr, qu\'est-ce que vous n\'avez pas compris ?' },
    { speaker: 'me', romaji: 'kono bun desu, mou ichido yukkuri onegaishimasu.', french: 'Cette phrase, encore une fois lentement svp.' },
    { speaker: 'them', romaji: 'wakarimashita, yukkuri kurikaeshimasu.', french: 'D\'accord, je la répète lentement.' },
  ] },
  // me first — souvenir de France
  { id: 'sd-d-29', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'kore, Furansu kara motte kita omiyage desu, douzo.', french: 'Voici un souvenir que j\'ai ramené de France.' },
    { speaker: 'them', romaji: 'ara, kawaii desu ne, nani desu ka?', french: 'Oh, c\'est mignon, c\'est quoi ?' },
    { speaker: 'me', romaji: 'Furansu no chokoreto desu, oishi to ii no desu ga.', french: 'Du chocolat français, j\'espère que c\'est bon.' },
    { speaker: 'them', romaji: 'arigatou gozaimasu, tanoshimi ni itadakimasu.', french: 'Merci beaucoup, j\'ai hâte d\'y goûter.' },
  ] },
  // me first — politesse / entrée
  { id: 'sd-d-30', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'sumimasen, chotto ojama shite mo ii desu ka?', french: 'Pardon, je peux vous déranger un instant ?' },
    { speaker: 'them', romaji: 'hai, douzo ohairi kudasai.', french: 'Oui, je vous en prie, entrez.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, sukoshi yasumitakute.', french: 'Merci, je voulais me reposer un peu.' },
    { speaker: 'them', romaji: 'goyukkuri douzo, nani ka irimasuka?', french: 'Prenez votre temps, vous avez besoin de quelque chose ?' },
  ] },
  { id: 'sd-d-31', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'shitsurei shimasu, koko wa haitte mo ii desu ka?', french: 'Pardon, je peux entrer ici ?' },
    { speaker: 'them', romaji: 'hai, mochiron desu, douzo ohairi kudasai.', french: 'Oui, bien sûr, je vous en prie.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, ojama shimasu.', french: 'Merci, pardon de vous déranger.' },
    { speaker: 'them', romaji: 'goyukkuri douzo, nanika osagashi desu ka?', french: 'Prenez votre temps, vous cherchez quelque chose ?' },
  ] },
  // them first — politesse
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
  // me first — au revoir
  { id: 'sd-d-37', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'sorosoro shitsurei shimasu, kyou wa hontou ni arigatou gozaimashita.', french: 'Je vais y aller, merci vraiment pour aujourd\'hui.' },
    { speaker: 'them', romaji: 'mata aimashou, tanoshii tabi o.', french: 'À la prochaine, bon voyage.' },
    { speaker: 'me', romaji: 'hai, kanarazu mata kimasu, ogenki de.', french: 'Oui, je reviendrai sans faute, portez-vous bien.' },
    { speaker: 'them', romaji: 'kochira koso, ki o tsukete.', french: 'Moi de même, faites attention.' },
  ] },
  { id: 'sd-d-38', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'oyasumi nasai, asu wa hachi-ji ni roubii de aimashou.', french: 'Bonne nuit, demain rendez-vous à 8h dans le lobby.' },
    { speaker: 'them', romaji: 'hai, mata ashita, ii yume o.', french: 'Oui, à demain, faites de beaux rêves.' },
    { speaker: 'me', romaji: 'arigatou, anata mo, oyasumi nasai.', french: 'Merci, vous aussi, bonne nuit.' },
    { speaker: 'them', romaji: 'oyasumi nasai.', french: 'Bonne nuit.' },
  ] },
  { id: 'sd-d-39', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'ja, matane, kyou wa tanoshikatta!', french: 'Allez, à plus, c\'était super aujourd\'hui !' },
    { speaker: 'them', romaji: 'sou, matane, ii tabi o tsuzukete.', french: 'Oui, à plus, continue ton beau voyage.' },
    { speaker: 'me', romaji: 'arigatou, renraku shimasu ne.', french: 'Merci, je te recontacte.' },
    { speaker: 'them', romaji: 'mattemasu, ki o tsukete.', french: 'J\'attends, fais attention à toi.' },
  ] },
  { id: 'sd-d-40', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'kaeri wa takushii ga ii desu ka, basu ga ii desu ka?', french: 'Pour rentrer, taxi ou bus ?' },
    { speaker: 'them', romaji: 'basu ga benri desu yo, eki made sugu desu.', french: 'Le bus c\'est pratique, c\'est vite à la gare.' },
    { speaker: 'me', romaji: 'basu-noriba wa koko kara doko desu ka?', french: 'L\'arrêt de bus, c\'est où depuis ici ?' },
    { speaker: 'them', romaji: 'kono michi o massugu, migi-gawa ni arimasu.', french: 'Tout droit dans cette rue, sur la droite.' },
  ] },
  // me first — quotidien
  { id: 'sd-d-41', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'sumimasen, kono atari ni ATM wa arimasu ka?', french: 'Pardon, y a-t-il un distributeur dans le coin ?' },
    { speaker: 'them', romaji: 'hai, konbini no naka ni arimasu yo.', french: 'Oui, dans la supérette.' },
    { speaker: 'me', romaji: 'gaikoku no kaado de mo tsukaemasu ka?', french: 'Ça marche avec les cartes étrangères ?' },
    { speaker: 'them', romaji: 'hai, daijoubu desu yo, eigo no menyu mo arimasu.', french: 'Oui, et il y a un menu en anglais.' },
  ] },
  // me first — café
  { id: 'sd-d-43', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'sumimasen, koohii o onegaishimasu, miruku iri de.', french: 'Pardon, un café avec du lait svp.' },
    { speaker: 'them', romaji: 'hotto to aisu, dochira ga yoroshii desu ka?', french: 'Chaud ou glacé ?' },
    { speaker: 'me', romaji: 'hotto de onegaishimasu, satou wa irimasen.', french: 'Chaud svp, sans sucre.' },
    { speaker: 'them', romaji: 'kashikomarimashita, sugu motte mairimasu.', french: 'Noté, j\'apporte ça tout de suite.' },
  ] },
  // me first — heure / direction
  { id: 'sd-d-46', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'itsu ukageba yoroshii desu ka? gogo san-ji goro wa ikaga desu ka?', french: 'Quand puis-je venir vous voir ? Vers 15h ça vous va ?' },
    { speaker: 'them', romaji: 'gogo san-ji wa mondai nai desu, douzo.', french: 'Pas de souci pour 15h, venez.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, jikan dori ni mairimasu.', french: 'Merci, j\'arriverai à l\'heure.' },
    { speaker: 'them', romaji: 'omachi shite imasu.', french: 'Je vous attends.' },
  ] },
  { id: 'sd-d-47', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'eki ni ikimasu ga, onaji houkou nara isshou ni ikimasu ka?', french: 'Je vais à la gare, si c\'est la même direction on y va ensemble ?' },
    { speaker: 'them', romaji: 'ii desu ne, watashi mo eki no chikaku desu.', french: 'Avec plaisir, moi aussi je vais près de la gare.' },
    { speaker: 'me', romaji: 'yokatta, houkou ga wakaru ka shinpai deshita.', french: 'Super, je ne savais pas trop quelle direction prendre.' },
    { speaker: 'them', romaji: 'daijoubu desu, isshou ni ikimashou.', french: 'Pas de souci, allons-y.' },
  ] },
  { id: 'sd-d-48', situation: 'salutations-demandes', turns: [
    { speaker: 'me', romaji: 'raishuu no kayoubi ni Nihon wo tachimasu, ato go-nichi desu.', french: 'Je repars mardi prochain, il me reste cinq jours.' },
    { speaker: 'them', romaji: 'mada jikan ga arimasu ne, nani o miru yotei desu ka?', french: 'Vous avez encore du temps, que prévoyez-vous de voir ?' },
    { speaker: 'me', romaji: 'Kyoto to Nara ni mo iku yotei desu.', french: 'Je prévois d\'aller à Kyoto et Nara aussi.' },
    { speaker: 'them', romaji: 'subarashii, tanoshinde kudasai.', french: 'Super, profitez bien.' },
  ] },
  // them first — petite conversation
  { id: 'sd-d-49', situation: 'salutations-demandes', turns: [
    { speaker: 'them', romaji: 'ii tenki desu ne.', french: 'Il fait beau hein.' },
    { speaker: 'me', romaji: 'hai, hontou ni, kankou ni pittari desu.', french: 'Oui, vraiment, parfait pour visiter.' },
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
