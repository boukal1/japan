import { Dialog } from '../../models/word.model';

export const CAISSE_DIALOGS: Dialog[] = [
  // me first — acheter
  { id: 'ca-d-01', situation: 'caisse', turns: [
    { speaker: 'me', romaji: 'konnichiwa, kore to kore o onegaishimasu.', french: 'Bonjour, je prends ceci et ceci svp.' },
    { speaker: 'them', romaji: 'arigatou gozaimasu, zenbu de gohyaku-en de gozaimasu.', french: 'Merci, ça fait 500 yens en tout.' },
    { speaker: 'me', romaji: 'kaado de ii desu ka?', french: 'Je peux payer par carte ?' },
    { speaker: 'them', romaji: 'hai, douzo kochira ni.', french: 'Oui, par ici svp.' },
  ] },
  // them first
  { id: 'ca-d-02', situation: 'caisse', turns: [
    { speaker: 'them', romaji: 'tsugi no kata, douzo.', french: 'Au suivant svp.' },
    { speaker: 'me', romaji: 'sumimasen, kore to kore o onegaishimasu.', french: 'Pardon, je prends ceci et ceci svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, fukuro wa goriyou desu ka?', french: 'C\'est noté, vous voulez un sac ?' },
    { speaker: 'me', romaji: 'iie, mai-baggu ga arimasu, daijoubu desu.', french: 'Non, j\'ai mon sac, ça va.' },
  ] },
  // me first — réchauffer
  { id: 'ca-d-03', situation: 'caisse', turns: [
    { speaker: 'me', romaji: 'sumimasen, kono onigiri o atatamete itadakemasu ka?', french: 'Pardon, vous pouvez réchauffer cet onigiri ?' },
    { speaker: 'them', romaji: 'kashikomarimashita, atatame masu.', french: 'Bien noté, je le chauffe.' },
    { speaker: 'me', romaji: 'hashi mo tsukete kudasai.', french: 'Des baguettes svp aussi.' },
    { speaker: 'them', romaji: 'hai, atatame to ohashi de gozaimasu ne.', french: 'Oui, chauffé et baguettes donc.' },
  ] },
  // them first
  { id: 'ca-d-04', situation: 'caisse', turns: [
    { speaker: 'them', romaji: 'pointo kaado wa omochi desu ka?', french: 'Vous avez une carte de fidélité ?' },
    { speaker: 'me', romaji: 'iie, motte imasen, tsukuru hitsuyou wa arimasu ka?', french: 'Non, je n\'en ai pas, faut-il en faire une ?' },
    { speaker: 'them', romaji: 'iie, hitsuyou nai desu, sono mama de daijoubu desu.', french: 'Non, pas besoin, c\'est ok comme ça.' },
    { speaker: 'me', romaji: 'wakarimashita, arigatou.', french: 'D\'accord, merci.' },
  ] },
  // me first — sac plastique
  { id: 'ca-d-05', situation: 'caisse', turns: [
    { speaker: 'me', romaji: 'sumimasen, fukuro o ichi-mai onegaishimasu.', french: 'Pardon, un sac svp.' },
    { speaker: 'them', romaji: 'san-en de gozaimasu, yoroshii desu ka?', french: 'C\'est 3 yens, ok ?' },
    { speaker: 'me', romaji: 'hai, onegaishimasu.', french: 'Oui svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita.', french: 'C\'est noté.' },
  ] },
  // them first
  { id: 'ca-d-06', situation: 'caisse', turns: [
    { speaker: 'them', romaji: 'fukuro wa daiyou de gozaimasu.', french: 'Le sac est payant.' },
    { speaker: 'me', romaji: 'sou desu ka, ja irimasen, mai-baggu ni iremasu.', french: 'Ah ok, alors non, je le mets dans mon sac.' },
    { speaker: 'them', romaji: 'kashikomarimashita, sasshite kudasai.', french: 'C\'est noté, à votre aise.' },
    { speaker: 'me', romaji: 'arigatou, jibun de tsumemasu.', french: 'Merci, je l\'arrange moi-même.' },
  ] },
  // me first — baguettes
  { id: 'ca-d-07', situation: 'caisse', turns: [
    { speaker: 'me', romaji: 'sumimasen, ohashi o tsukete itadakemasu ka?', french: 'Pardon, vous pouvez ajouter des baguettes ?' },
    { speaker: 'them', romaji: 'hai, ikutsu oniriyou desu ka?', french: 'Oui, vous en voulez combien ?' },
    { speaker: 'me', romaji: 'futatsu onegaishimasu, ato atatamete mo kudasai.', french: 'Deux svp, et réchauffez aussi.' },
    { speaker: 'them', romaji: 'hai, ohashi ni-zen to atatame desu ne.', french: 'Oui, deux paires de baguettes et réchauffé.' },
  ] },
  // them first
  { id: 'ca-d-08', situation: 'caisse', turns: [
    { speaker: 'them', romaji: 'ohashi wa goriyou ni narimasu ka?', french: 'Avez-vous besoin de baguettes ?' },
    { speaker: 'me', romaji: 'onegaishimasu, ni-zen kudasai.', french: 'Oui svp, deux paires.' },
    { speaker: 'them', romaji: 'hai, ohashi ni-zen desu ne.', french: 'Oui, deux paires de baguettes.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu.', french: 'Merci.' },
  ] },
  { id: 'ca-d-09', situation: 'caisse', turns: [
    { speaker: 'them', romaji: 'supuun wa goriyou ni narimasu ka?', french: 'Vous voulez une cuillère ?' },
    { speaker: 'me', romaji: 'hai, supuun to ohashi mo onegaishimasu.', french: 'Oui, une cuillère et des baguettes svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, fukuro ni iremasu.', french: 'C\'est noté, je les mets dans le sac.' },
    { speaker: 'me', romaji: 'sumimasen, onegaishimasu.', french: 'Pardon, merci svp.' },
  ] },
  // me first — fourchettes + sac froid
  { id: 'ca-d-10', situation: 'caisse', turns: [
    { speaker: 'me', romaji: 'sumimasen, fooku o futatsu to hiyashi-you no fukuro mo onegaishimasu.', french: 'Pardon, deux fourchettes et un sac pour le froid svp.' },
    { speaker: 'them', romaji: 'kashikomari mashita, hiyashite o-todoke shimasu.', french: 'C\'est noté, je vous emballe au frais.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, taihen tasukari masu.', french: 'Merci, c\'est très aimable.' },
    { speaker: 'them', romaji: 'douzo, goyukkuri.', french: 'Je vous en prie, prenez votre temps.' },
  ] },
  { id: 'ca-d-11', situation: 'caisse', turns: [
    { speaker: 'them', romaji: 'koko de omeshiagari desu ka, omochikaeri desu ka?', french: 'Sur place ou à emporter ?' },
    { speaker: 'me', romaji: 'mochikaeri de onegaishimasu, atatame mo onegaishimasu.', french: 'À emporter svp, et chauffé svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, niimon goran kudasai.', french: 'C\'est noté, regardez l\'écran.' },
    { speaker: 'me', romaji: 'wakarimashita, arigatou.', french: 'D\'accord, merci.' },
  ] },
  // me first — paiement par carte
  { id: 'ca-d-12', situation: 'caisse', turns: [
    { speaker: 'me', romaji: 'kurejitto-kaado de haraemasuka? ikkatsu de onegaishimasu.', french: 'Je peux payer par carte ? En une fois svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, kochira ni okidashite kudasai.', french: 'Noté, insérez ici svp.' },
    { speaker: 'me', romaji: 'sashikomi mashita, anshou-bangou desu ne.', french: 'Inséré, ensuite c\'est le code.' },
    { speaker: 'them', romaji: 'hai, nyuuryoku kudasai.', french: 'Oui, tapez le code svp.' },
  ] },
  // them first
  { id: 'ca-d-13', situation: 'caisse', turns: [
    { speaker: 'them', romaji: 'okaado de yoroshii desu ka?', french: 'Vous payez par carte ?' },
    { speaker: 'me', romaji: 'hai, kontakuto-resu de tsukaemasu ka?', french: 'Oui, je peux payer en sans contact ?' },
    { speaker: 'them', romaji: 'hai, kazashite kudasai.', french: 'Oui, posez-la.' },
    { speaker: 'me', romaji: 'arigatou, owari mashita.', french: 'Merci, c\'est fait.' },
  ] },
  // me first — Suica
  { id: 'ca-d-14', situation: 'caisse', turns: [
    { speaker: 'me', romaji: 'sumimasen, suica de haraemasuka?', french: 'Pardon, je peux payer avec ma Suica ?' },
    { speaker: 'them', romaji: 'hai, douzo kazashite kudasai.', french: 'Oui, posez-la.' },
    { speaker: 'me', romaji: 'kazashi mashita, owari desu ka?', french: 'Posée, c\'est fait ?' },
    { speaker: 'them', romaji: 'hai, ryoushuusho wa irimasuka?', french: 'Oui, vous voulez un reçu ?' },
  ] },
  // them first
  { id: 'ca-d-15', situation: 'caisse', turns: [
    { speaker: 'them', romaji: 'anshou-bangou o nyuuryoku kudasai.', french: 'Tapez votre code PIN svp.' },
    { speaker: 'me', romaji: 'hai, ima nyuuryoku shimasu.', french: 'Oui, je le tape.' },
    { speaker: 'them', romaji: 'arigatou gozaimasu, sain wa fuyou de gozaimasu.', french: 'Merci, pas besoin de signer.' },
    { speaker: 'me', romaji: 'wakarimashita, arigatou.', french: 'Compris, merci.' },
  ] },
  { id: 'ca-d-16', situation: 'caisse', turns: [
    { speaker: 'them', romaji: 'kochira ni sain o onegaishimasu.', french: 'Signez ici svp.' },
    { speaker: 'me', romaji: 'hai, koko desu ne.', french: 'Oui, ici donc.' },
    { speaker: 'them', romaji: 'arigatou gozaimasu, kakunin shimashita.', french: 'Merci, c\'est vérifié.' },
    { speaker: 'me', romaji: 'arigatou, otsuri to reshiito o onegaishimasu.', french: 'Merci, ma monnaie et le reçu svp.' },
  ] },
  // me first — billet de 10 000
  { id: 'ca-d-17', situation: 'caisse', turns: [
    { speaker: 'me', romaji: 'sumimasen, ikura desu ka? ichi-man-en de ii desu ka?', french: 'Pardon, c\'est combien ? Je peux vous donner 10 000 yens ?' },
    { speaker: 'them', romaji: 'hai, otsuri wa nana-sen-en de gozaimasu.', french: 'Oui, vous aurez 7 000 yens de monnaie.' },
    { speaker: 'me', romaji: 'kakunin shimashita, arigatou.', french: 'Vérifié, merci.' },
    { speaker: 'them', romaji: 'arigatou gozaimashita.', french: 'Merci à vous.' },
  ] },
  // me first — espèces
  { id: 'ca-d-18', situation: 'caisse', turns: [
    { speaker: 'me', romaji: 'genkin de haraitai desu, ikura desu ka?', french: 'Je paie en espèces, c\'est combien ?' },
    { speaker: 'them', romaji: 'san-zen-en de gozaimasu.', french: 'C\'est 3 000 yens.' },
    { speaker: 'me', romaji: 'sen-en-satsu san-mai de daijoubu desu ka?', french: 'Trois billets de 1 000 yens ça va ?' },
    { speaker: 'them', romaji: 'hai, kashikomarimashita.', french: 'Oui c\'est bon.' },
  ] },
  // them first
  { id: 'ca-d-19', situation: 'caisse', turns: [
    { speaker: 'them', romaji: 'otsuri to reshiito de gozaimasu.', french: 'Voici la monnaie et le reçu.' },
    { speaker: 'me', romaji: 'arigatou gozaimasu, fukuro mo o-iremashita ka?', french: 'Merci, vous avez tout mis dans le sac ?' },
    { speaker: 'them', romaji: 'hai, zenbu fukuro ni o-ire shimashita.', french: 'Oui, tout est dedans.' },
    { speaker: 'me', romaji: 'iroiro arigatou, sayounara.', french: 'Merci pour tout, au revoir.' },
  ] },
  // me first — pas de reçu
  { id: 'ca-d-20', situation: 'caisse', turns: [
    { speaker: 'me', romaji: 'reshiito wa irimasen, kankyo no tame ni mo.', french: 'Pas besoin de reçu, pour l\'environnement aussi.' },
    { speaker: 'them', romaji: 'kashikomarimashita, eko desu ne.', french: 'C\'est noté, c\'est écolo.' },
    { speaker: 'me', romaji: 'sou desu ne, chiisana koto desu ga.', french: 'Oui, c\'est peu de chose mais bon.' },
    { speaker: 'them', romaji: 'arigatou gozaimasu, mata okoshi kudasai.', french: 'Merci, revenez nous voir.' },
  ] },
  // them first
  { id: 'ca-d-21', situation: 'caisse', turns: [
    { speaker: 'them', romaji: 'ryoushuusho ga hitsuyou desu ka?', french: 'Vous avez besoin d\'une facture officielle ?' },
    { speaker: 'me', romaji: 'hai, kaisha-mei o ___ to kaite kudasai.', french: 'Oui svp, mettez le nom de société : ___.' },
    { speaker: 'them', romaji: 'kashikomarimashita, kaite mairimasu.', french: 'C\'est noté, je vais l\'écrire.' },
    { speaker: 'me', romaji: 'oishigamai shimasen, arigatou gozaimasu.', french: 'Pardon de l\'embarras, merci.' },
  ] },
  // me first — coupon
  { id: 'ca-d-22', situation: 'caisse', turns: [
    { speaker: 'me', romaji: 'sumimasen, kono kuupon wa tsukaemasu ka? mada yuukou desu ka?', french: 'Pardon, ce coupon est utilisable ? Il est encore valide ?' },
    { speaker: 'them', romaji: 'hai, kyou made daijoubu de gozaimasu.', french: 'Oui, valide jusqu\'à aujourd\'hui.' },
    { speaker: 'me', romaji: 'yokatta, ja onegaishimasu.', french: 'Tant mieux, alors svp.' },
    { speaker: 'them', romaji: 'kashikomarimashita, nedan kara hikase itadakimasu.', french: 'C\'est noté, je le déduis du prix.' },
  ] },
  // me first — réduction
  { id: 'ca-d-23', situation: 'caisse', turns: [
    { speaker: 'me', romaji: 'sumimasen, waribiki wa arimasu ka?', french: 'Pardon, y a-t-il des réductions ?' },
    { speaker: 'them', romaji: 'hai, aoi ne-fuda no shouhin ga zenbu nijuu paasento offu desu.', french: 'Oui, tout ce qui a une étiquette bleue est à -20%.' },
    { speaker: 'me', romaji: 'sou desu ka, ato hitotsu mite kimasu, arigatou.', french: 'Ah ok, je vais encore regarder, merci.' },
    { speaker: 'them', romaji: 'douzo, goyukkuri.', french: 'Je vous en prie, prenez votre temps.' },
  ] },
  // them first
  { id: 'ca-d-24', situation: 'caisse', turns: [
    { speaker: 'them', romaji: 'fukuro ni o-iremashou ka?', french: 'Voulez-vous que je le mette dans le sac ?' },
    { speaker: 'me', romaji: 'onegaishimasu, tsumetai mono to wakete kudasai.', french: 'Oui svp, séparez le froid svp.' },
    { speaker: 'them', romaji: 'kashikomari mashita, betsu betsu ni o-iremasu.', french: 'C\'est noté, je sépare.' },
    { speaker: 'me', romaji: 'taihen tasukarimasu, arigatou gozaimasu.', french: 'Ça aide bien, merci.' },
  ] },
  { id: 'ca-d-25', situation: 'caisse', turns: [
    { speaker: 'them', romaji: 'arigatou gozaimashita, mata okoshi kudasai.', french: 'Merci, revenez nous voir.' },
    { speaker: 'me', romaji: 'oishi-katta desu, mata kimasu.', french: 'C\'était bon, je reviendrai.' },
    { speaker: 'them', romaji: 'osoreirimasu, ki o tsukete o-kaeri kudasai.', french: 'Vous nous flattez, rentrez bien.' },
    { speaker: 'me', romaji: 'arigatou, sayounara.', french: 'Merci, au revoir.' },
  ] },
];
