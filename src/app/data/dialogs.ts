import { Dialog } from '../models/word.model';

export const DIALOGS: Dialog[] = [
  // === Salutations, remerciements & demandes (50) ===
  // Salutations basiques
  { id: 'sd-d-01', situation: 'salutations-demandes', heard: { romaji: 'konnichiwa.', french: 'Bonjour.' }, reply: { romaji: 'konnichiwa.', french: 'Bonjour.' } },
  { id: 'sd-d-02', situation: 'salutations-demandes', heard: { romaji: 'ohayou gozaimasu.', french: 'Bonjour. (matin)' }, reply: { romaji: 'ohayou gozaimasu.', french: 'Bonjour.' } },
  { id: 'sd-d-03', situation: 'salutations-demandes', heard: { romaji: 'konbanwa.', french: 'Bonsoir.' }, reply: { romaji: 'konbanwa.', french: 'Bonsoir.' } },
  { id: 'sd-d-04', situation: 'salutations-demandes', heard: { romaji: 'oyasuminasai.', french: 'Bonne nuit.' }, reply: { romaji: 'oyasuminasai.', french: 'Bonne nuit.' } },
  { id: 'sd-d-05', situation: 'salutations-demandes', heard: { romaji: 'sayounara.', french: 'Au revoir.' }, reply: { romaji: 'sayounara, mata ne.', french: 'Au revoir, à plus.' } },

  // Comment ça va
  { id: 'sd-d-06', situation: 'salutations-demandes', heard: { romaji: 'ogenki desu ka?', french: 'Comment allez-vous ?' }, reply: { romaji: 'hai, genki desu. anata wa?', french: 'Oui, je vais bien. Et vous ?' } },
  { id: 'sd-d-07', situation: 'salutations-demandes', heard: { romaji: 'saikin dou desu ka?', french: 'Comment ça va ces temps-ci ?' }, reply: { romaji: 'okagesama de, genki desu.', french: 'Grâce à vous, ça va bien.' } },
  { id: 'sd-d-08', situation: 'salutations-demandes', heard: { romaji: 'tsukaresou desu ne.', french: 'Vous avez l\'air fatigué.' }, reply: { romaji: 'chotto tsukareteimasu.', french: 'Un peu fatigué oui.' } },

  // Première rencontre
  { id: 'sd-d-09', situation: 'salutations-demandes', heard: { romaji: 'hajimemashite.', french: 'Enchanté.' }, reply: { romaji: 'hajimemashite, yoroshiku onegaishimasu.', french: 'Enchanté, ravi de vous rencontrer.' } },
  { id: 'sd-d-10', situation: 'salutations-demandes', heard: { romaji: 'onamae wa nan desu ka?', french: 'Comment vous appelez-vous ?' }, reply: { romaji: 'Pierre to moushimasu.', french: 'Je m\'appelle Pierre.' } },
  { id: 'sd-d-11', situation: 'salutations-demandes', heard: { romaji: 'doko kara kimashita ka?', french: 'D\'où venez-vous ?' }, reply: { romaji: 'furansu kara kimashita.', french: 'Je viens de France.' } },

  // Compliments / remerciements
  { id: 'sd-d-14', situation: 'salutations-demandes', heard: { romaji: 'nihongo ga jouzu desu ne.', french: 'Vous parlez bien japonais.' }, reply: { romaji: 'iie, mada mada desu.', french: 'Non, je suis encore loin du compte.' } },
  { id: 'sd-d-15', situation: 'salutations-demandes', heard: { romaji: 'arigatou gozaimasu.', french: 'Merci beaucoup.' }, reply: { romaji: 'doitashimashite.', french: 'De rien.' } },
  { id: 'sd-d-16', situation: 'salutations-demandes', heard: { romaji: 'doumo arigatou.', french: 'Merci.' }, reply: { romaji: 'iie, daijoubu desu.', french: 'Non, c\'est rien.' } },
  { id: 'sd-d-17', situation: 'salutations-demandes', heard: { romaji: 'tasukatte arigatou.', french: 'Merci pour votre aide.' }, reply: { romaji: 'tonde mo arimasen.', french: 'Pas du tout / je vous en prie.' } },

  // Excuses
  { id: 'sd-d-18', situation: 'salutations-demandes', heard: { romaji: 'sumimasen.', french: 'Excusez-moi.' }, reply: { romaji: 'hai, nan desu ka?', french: 'Oui, qu\'y a-t-il ?' } },
  { id: 'sd-d-19', situation: 'salutations-demandes', heard: { romaji: 'gomennasai.', french: 'Pardon.' }, reply: { romaji: 'ki ni shinaide kudasai.', french: 'Ne vous en faites pas.' } },
  { id: 'sd-d-20', situation: 'salutations-demandes', heard: { romaji: 'okuremashita, sumimasen.', french: 'Désolé d\'être en retard.' }, reply: { romaji: 'daijoubu desu yo.', french: 'Pas de souci.' } },

  // Aide
  { id: 'sd-d-21', situation: 'salutations-demandes', heard: { romaji: 'tetsudaimashou ka?', french: 'Voulez-vous que je vous aide ?' }, reply: { romaji: 'onegai shimasu.', french: 'Oui s\'il vous plaît.' } },
  { id: 'sd-d-22', situation: 'salutations-demandes', heard: { romaji: 'nani ka komatte imasu ka?', french: 'Avez-vous un problème ?' }, reply: { romaji: 'michi ni mayoimashita.', french: 'Je me suis perdu.' } },
  { id: 'sd-d-23', situation: 'salutations-demandes', heard: { romaji: 'daijoubu desu ka?', french: 'Ça va ?' }, reply: { romaji: 'hai, daijoubu desu.', french: 'Oui, ça va.' } },
  { id: 'sd-d-24', situation: 'salutations-demandes', heard: { romaji: 'nani o sagashite imasu ka?', french: 'Que cherchez-vous ?' }, reply: { romaji: 'eki o sagashite imasu.', french: 'Je cherche la gare.' } },

  // Téléphone
  { id: 'sd-d-25', situation: 'salutations-demandes', heard: { romaji: 'moshimoshi?', french: 'Allô ?' }, reply: { romaji: 'moshimoshi, Pierre desu.', french: 'Allô, c\'est Pierre.' } },

  // Compréhension
  { id: 'sd-d-26', situation: 'salutations-demandes', heard: { romaji: 'wakarimashita ka?', french: 'Avez-vous compris ?' }, reply: { romaji: 'hai, wakarimashita.', french: 'Oui, j\'ai compris.' } },
  { id: 'sd-d-27', situation: 'salutations-demandes', heard: { romaji: 'eigo ga hanasemasu ka?', french: 'Parlez-vous anglais ?' }, reply: { romaji: 'hai, sukoshi.', french: 'Oui, un peu.' } },
  { id: 'sd-d-28', situation: 'salutations-demandes', heard: { romaji: 'yukkuri hanashimashou ka?', french: 'Voulez-vous que je parle plus lentement ?' }, reply: { romaji: 'hai, onegai shimasu.', french: 'Oui svp.' } },
  { id: 'sd-d-29', situation: 'salutations-demandes', heard: { romaji: 'kore wa nan desu ka?', french: 'Qu\'est-ce que c\'est ?' }, reply: { romaji: 'kore wa hon desu.', french: 'C\'est un livre.' } },

  // Politesse
  { id: 'sd-d-30', situation: 'salutations-demandes', heard: { romaji: 'youkoso!', french: 'Bienvenue !' }, reply: { romaji: 'ojama shimasu.', french: 'Pardon de vous déranger.' } },
  { id: 'sd-d-31', situation: 'salutations-demandes', heard: { romaji: 'douzo.', french: 'Je vous en prie.' }, reply: { romaji: 'shitsurei shimasu.', french: 'Excusez-moi (j\'entre).' } },
  { id: 'sd-d-32', situation: 'salutations-demandes', heard: { romaji: 'ki o tsukete.', french: 'Faites attention.' }, reply: { romaji: 'hai, arigatou.', french: 'Oui, merci.' } },
  { id: 'sd-d-33', situation: 'salutations-demandes', heard: { romaji: 'itterasshai.', french: 'Va et reviens.' }, reply: { romaji: 'ittekimasu.', french: 'J\'y vais.' } },
  { id: 'sd-d-34', situation: 'salutations-demandes', heard: { romaji: 'okaerinasai.', french: 'Bienvenue à la maison.' }, reply: { romaji: 'tadaima.', french: 'Je suis rentré.' } },

  // Souhaits
  { id: 'sd-d-37', situation: 'salutations-demandes', heard: { romaji: 'ogenki de.', french: 'Portez-vous bien.' }, reply: { romaji: 'anata mo.', french: 'Vous aussi.' } },

  // Au revoir
  { id: 'sd-d-38', situation: 'salutations-demandes', heard: { romaji: 'mata ashita.', french: 'À demain.' }, reply: { romaji: 'hai, mata ashita.', french: 'Oui, à demain.' } },
  { id: 'sd-d-39', situation: 'salutations-demandes', heard: { romaji: 'matane.', french: 'À plus.' }, reply: { romaji: 'matane!', french: 'À plus !' } },
  { id: 'sd-d-40', situation: 'salutations-demandes', heard: { romaji: 'ki o tsukete kaette ne.', french: 'Rentre bien.' }, reply: { romaji: 'hai, arigatou.', french: 'Oui, merci.' } },

  // Quotidien
  { id: 'sd-d-41', situation: 'salutations-demandes', heard: { romaji: 'nan ka goyou desu ka?', french: 'Avez-vous besoin de quelque chose ?' }, reply: { romaji: 'iie, daijoubu desu.', french: 'Non, ça va.' } },
  { id: 'sd-d-43', situation: 'salutations-demandes', heard: { romaji: 'koohii wa ikaga desu ka?', french: 'Voulez-vous un café ?' }, reply: { romaji: 'onegai shimasu.', french: 'Oui svp.' } },

  // Direction & temps
  { id: 'sd-d-46', situation: 'salutations-demandes', heard: { romaji: 'nan-ji ni kimasu ka?', french: 'À quelle heure venez-vous ?' }, reply: { romaji: 'san-ji ni ikimasu.', french: 'Je viens à 15h.' } },
  { id: 'sd-d-47', situation: 'salutations-demandes', heard: { romaji: 'doko ni ikimasu ka?', french: 'Où allez-vous ?' }, reply: { romaji: 'eki ni ikimasu.', french: 'Je vais à la gare.' } },
  { id: 'sd-d-48', situation: 'salutations-demandes', heard: { romaji: 'itsu kaerimasu ka?', french: 'Quand rentrez-vous ?' }, reply: { romaji: 'raishuu kaerimasu.', french: 'Je rentre la semaine prochaine.' } },

  // Petite conversation
  { id: 'sd-d-49', situation: 'salutations-demandes', heard: { romaji: 'ii tenki desu ne.', french: 'Il fait beau hein.' }, reply: { romaji: 'hai, hontou ni.', french: 'Oui, vraiment.' } },
  { id: 'sd-d-50', situation: 'salutations-demandes', heard: { romaji: 'atsui desu ne.', french: 'Il fait chaud hein.' }, reply: { romaji: 'hai, totemo atsui desu.', french: 'Oui, très chaud.' } },

  // === Au restaurant (50) ===
  // Réservation par téléphone
  { id: 're-d-01', situation: 'restaurant', heard: { romaji: 'moshimoshi, ___ desu.', french: 'Allô, ici ___.' }, reply: { romaji: 'yoyaku o onegaishimasu.', french: 'Je voudrais réserver.' } },
  { id: 're-d-02', situation: 'restaurant', heard: { romaji: 'nan-mei sama desu ka?', french: 'Vous êtes combien ?' }, reply: { romaji: 'futari desu.', french: 'Deux personnes.' } },
  { id: 're-d-03', situation: 'restaurant', heard: { romaji: 'nan-ji ni nasaimasu ka?', french: 'À quelle heure ?' }, reply: { romaji: 'shichi-ji ni onegaishimasu.', french: 'À 19h svp.' } },
  { id: 're-d-04', situation: 'restaurant', heard: { romaji: 'onamae o douzo.', french: 'Votre nom svp.' } , reply: { romaji: 'Pierre to moushimasu.', french: 'Je m\'appelle Pierre.' } },
  { id: 're-d-05', situation: 'restaurant', heard: { romaji: 'odenwa-bangou wa?', french: 'Votre numéro de téléphone ?' }, reply: { romaji: 'zero-kyuu-zero no ___ desu.', french: 'C\'est le 090-___.' } },

  // Arrivée au restaurant
  { id: 're-d-06', situation: 'restaurant', heard: { romaji: 'irasshaimase!', french: 'Bienvenue !' }, reply: { romaji: 'konbanwa, yoyaku shiteimasu.', french: 'Bonsoir, j\'ai une réservation.' } },
  { id: 're-d-07', situation: 'restaurant', heard: { romaji: 'oyoyaku no onamae wa?', french: 'À quel nom est la réservation ?' }, reply: { romaji: 'Pierre desu.', french: 'Pierre.' } },
  { id: 're-d-08', situation: 'restaurant', heard: { romaji: 'nanmei sama desu ka?', french: 'Vous êtes combien ?' }, reply: { romaji: 'futari desu.', french: 'Deux.' } },
  { id: 're-d-09', situation: 'restaurant', heard: { romaji: 'kitsuen-seki to kinen-seki, dochira ga ii desu ka?', french: 'Fumeur ou non-fumeur ?' }, reply: { romaji: 'kinen-seki onegai shimasu.', french: 'Non-fumeur svp.' } },
  { id: 're-d-10', situation: 'restaurant', heard: { romaji: 'teeburu to kauntaa, dochira ga ii desu ka?', french: 'Table ou comptoir ?' }, reply: { romaji: 'teeburu de onegaishimasu.', french: 'Une table svp.' } },
  { id: 're-d-11', situation: 'restaurant', heard: { romaji: 'kochira no seki de yoroshii desu ka?', french: 'Cette place vous convient ?' }, reply: { romaji: 'hai, daijoubu desu.', french: 'Oui parfait.' } },
  { id: 're-d-12', situation: 'restaurant', heard: { romaji: 'okimari ni narimashitara, oyobi kudasai.', french: 'Quand vous aurez choisi, appelez-nous.' }, reply: { romaji: 'hai, wakarimashita.', french: 'Oui, d\'accord.' } },

  // Boissons
  { id: 're-d-13', situation: 'restaurant', heard: { romaji: 'onomimono wa ikaga desu ka?', french: 'Que désirez-vous boire ?' }, reply: { romaji: 'biiru o ippai onegaishimasu.', french: 'Une bière svp.' } },
  { id: 're-d-14', situation: 'restaurant', heard: { romaji: 'saisho ni nani o omeshiagari ni narimasu ka?', french: 'Que prenez-vous d\'abord ?' }, reply: { romaji: 'ocha o kudasai.', french: 'Du thé vert svp.' } },
  { id: 're-d-15', situation: 'restaurant', heard: { romaji: 'okawari wa ikaga desu ka?', french: 'Souhaitez-vous être resservi ?' }, reply: { romaji: 'iie, kekkou desu.', french: 'Non merci.' } },

  // Conseil & spécialité
  { id: 're-d-16', situation: 'restaurant', heard: { romaji: 'osusume wa kochira desu.', french: 'Voici notre recommandation.' }, reply: { romaji: 'ja, sore ni shimasu.', french: 'Alors je prends ça.' } },
  { id: 're-d-17', situation: 'restaurant', heard: { romaji: 'kono mise no meibutsu wa sushi desu.', french: 'Notre spécialité, c\'est le sushi.' }, reply: { romaji: 'ja, omakase de onegaishimasu.', french: 'Alors faites au choix svp.' } },
  { id: 're-d-18', situation: 'restaurant', heard: { romaji: 'honjitsu no osusume wa toro desu.', french: 'La recommandation du jour, c\'est le thon gras.' }, reply: { romaji: 'tabete mitai desu.', french: 'Je voudrais y goûter.' } },
  { id: 're-d-19', situation: 'restaurant', heard: { romaji: 'kisetsu no shokuzai mo arimasu yo.', french: 'Nous avons aussi des produits de saison.' }, reply: { romaji: 'kisetsu no ryouri o onegaishimasu.', french: 'Un plat de saison svp.' } },

  // Commande
  { id: 're-d-20', situation: 'restaurant', heard: { romaji: 'gochuumon wa okimari desu ka?', french: 'Avez-vous choisi ?' }, reply: { romaji: 'hai, kore o kudasai.', french: 'Oui, je prends ceci.' } },
  { id: 're-d-21', situation: 'restaurant', heard: { romaji: 'kochira mo go-issho ni ikaga desu ka?', french: 'Cela aussi, ça vous tente ?' }, reply: { romaji: 'iie, kekkou desu.', french: 'Non merci.' } },
  { id: 're-d-22', situation: 'restaurant', heard: { romaji: 'karasa wa dou shimasu ka?', french: 'Quel niveau de piquant ?' }, reply: { romaji: 'amakuchi de onegaishimasu.', french: 'Doux svp.' } },
  { id: 're-d-23', situation: 'restaurant', heard: { romaji: 'yakikata wa?', french: 'Cuisson ?' }, reply: { romaji: 'midiamu de onegaishimasu.', french: 'Saignant svp.' } },
  { id: 're-d-24', situation: 'restaurant', heard: { romaji: 'kono ryouri wa ___ ga haitte imasu.', french: 'Ce plat contient ___.' }, reply: { romaji: 'arerugii ga arimasu, kawari wa arimasu ka?', french: 'J\'ai une allergie, avez-vous une alternative ?' } },

  // Service
  { id: 're-d-25', situation: 'restaurant', heard: { romaji: 'omachidousama deshita.', french: 'Désolé de l\'attente.' }, reply: { romaji: 'iie, daijoubu desu.', french: 'Pas de souci.' } },
  { id: 're-d-26', situation: 'restaurant', heard: { romaji: 'okimari no ___ desu.', french: 'Voici votre ___.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci beaucoup.' } },
  { id: 're-d-27', situation: 'restaurant', heard: { romaji: 'atsui desu kara, ki o tsukete.', french: 'C\'est chaud, attention.' }, reply: { romaji: 'hai, arigatou.', french: 'Oui, merci.' } },

  // Vérifications
  { id: 're-d-28', situation: 'restaurant', heard: { romaji: 'oaji wa ikaga desu ka?', french: 'Comment trouvez-vous le goût ?' }, reply: { romaji: 'totemo oishii desu!', french: 'Très bon !' } },
  { id: 're-d-29', situation: 'restaurant', heard: { romaji: 'ato nani ka chuumon shimasu ka?', french: 'Voulez-vous commander autre chose ?' }, reply: { romaji: 'iie, kekkou desu.', french: 'Non merci.' } },

  // Demander de plus
  { id: 're-d-30', situation: 'restaurant', heard: { romaji: 'nani ka tarinai mono wa arimasu ka?', french: 'Manque-t-il quelque chose ?' }, reply: { romaji: 'mizu o mou sukoshi onegaishimasu.', french: 'Encore un peu d\'eau svp.' } },
  { id: 're-d-31', situation: 'restaurant', heard: { romaji: 'okawari ikaga desu ka?', french: 'On vous ressert ?' }, reply: { romaji: 'onegaishimasu.', french: 'Oui svp.' } },

  // Coutumes
  { id: 're-d-32', situation: 'restaurant', heard: { romaji: 'okutsu o nuide kudasai.', french: 'Enlevez vos chaussures svp.' }, reply: { romaji: 'hai, wakarimashita.', french: 'Oui, d\'accord.' } },
  { id: 're-d-33', situation: 'restaurant', heard: { romaji: 'kanpai!', french: 'Santé !' }, reply: { romaji: 'kanpai!', french: 'Santé !' } },

  // Fin du repas
  { id: 're-d-34', situation: 'restaurant', heard: { romaji: 'osara o osage shimasu.', french: 'Je débarrasse les assiettes.' }, reply: { romaji: 'onegaishimasu.', french: 'Oui svp.' } },
  { id: 're-d-35', situation: 'restaurant', heard: { romaji: 'dezaato wa ikaga desu ka?', french: 'Un dessert ?' }, reply: { romaji: 'onegaishimasu.', french: 'Oui svp.' } },
  { id: 're-d-36', situation: 'restaurant', heard: { romaji: 'koohii wa ikaga desu ka?', french: 'Un café ?' }, reply: { romaji: 'iie, kekkou desu.', french: 'Non merci.' } },

  // Paiement
  { id: 're-d-37', situation: 'restaurant', heard: { romaji: 'okaikei wa kochira ni narimasu.', french: 'Voici l\'addition.' }, reply: { romaji: 'doumo arigatou.', french: 'Merci.' } },
  { id: 're-d-38', situation: 'restaurant', heard: { romaji: 'betsubetsu desu ka, isshou desu ka?', french: 'Séparément ou ensemble ?' }, reply: { romaji: 'betsubetsu de onegaishimasu.', french: 'Séparément svp.' } },
  { id: 're-d-39', situation: 'restaurant', heard: { romaji: 'kaado de yoroshii desu ka?', french: 'Vous payez par carte ?' }, reply: { romaji: 'hai.', french: 'Oui.' } },
  { id: 're-d-40', situation: 'restaurant', heard: { romaji: 'anshou-bangou o nyuuryoku kudasai.', french: 'Tapez votre code PIN svp.' }, reply: { romaji: 'hai.', french: 'Oui.' } },
  { id: 're-d-41', situation: 'restaurant', heard: { romaji: 'reshiito wa goriyou desu ka?', french: 'Souhaitez-vous le reçu ?' }, reply: { romaji: 'onegaishimasu.', french: 'Oui svp.' } },
  { id: 're-d-42', situation: 'restaurant', heard: { romaji: 'ryoushuusho wa irimasu ka?', french: 'Avez-vous besoin d\'une facture ?' }, reply: { romaji: 'hai, onegaishimasu.', french: 'Oui svp.' } },
  { id: 're-d-43', situation: 'restaurant', heard: { romaji: 'onamae wa nan to kakimashou ka?', french: 'À quel nom inscris-je ?' }, reply: { romaji: 'Pierre de onegaishimasu.', french: 'Au nom de Pierre svp.' } },
  { id: 're-d-44', situation: 'restaurant', heard: { romaji: 'otsuri to reshiito desu.', french: 'Voici votre monnaie et votre reçu.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci beaucoup.' } },

  // À emporter
  { id: 're-d-45', situation: 'restaurant', heard: { romaji: 'omochikaeri ni narimasu ka?', french: 'Vous emportez ?' }, reply: { romaji: 'hai, onegaishimasu.', french: 'Oui svp.' } },
  { id: 're-d-46', situation: 'restaurant', heard: { romaji: 'kochira wa atsui mama de yoroshii desu ka?', french: 'On vous le donne chaud ?' }, reply: { romaji: 'onegaishimasu.', french: 'Oui svp.' } },

  // Au revoir
  { id: 're-d-47', situation: 'restaurant', heard: { romaji: 'doumo arigatou gozaimashita.', french: 'Merci beaucoup.' }, reply: { romaji: 'gochisousama deshita, oishikatta desu.', french: 'Merci pour le repas, c\'était délicieux.' } },
  { id: 're-d-48', situation: 'restaurant', heard: { romaji: 'mata okoshi kudasaimase.', french: 'Revenez nous voir.' }, reply: { romaji: 'hai, mata kimasu.', french: 'Oui, je reviendrai.' } },
  { id: 're-d-49', situation: 'restaurant', heard: { romaji: 'ki o tsukete okaeri kudasai.', french: 'Rentrez bien.' }, reply: { romaji: 'hai, arigatou gozaimashita.', french: 'Oui, merci.' } },
  { id: 're-d-50', situation: 'restaurant', heard: { romaji: 'ikaga deshita ka?', french: 'Comment cela vous a-t-il plu ?' }, reply: { romaji: 'totemo yokatta desu.', french: 'C\'était très bon.' } },

  // === À la caisse (25) ===
  { id: 'ca-d-01', situation: 'caisse', heard: { romaji: 'irasshaimase!', french: 'Bienvenue !' }, reply: { romaji: 'konnichiwa.', french: 'Bonjour.' } },
  { id: 'ca-d-02', situation: 'caisse', heard: { romaji: 'tsugi no kata douzo.', french: 'Au suivant svp.' }, reply: { romaji: 'onegaishimasu.', french: 'Svp.' } },
  { id: 'ca-d-03', situation: 'caisse', heard: { romaji: 'kochira de zenbu desu ka?', french: 'C\'est tout ?' }, reply: { romaji: 'hai, sou desu.', french: 'Oui, c\'est tout.' } },
  { id: 'ca-d-04', situation: 'caisse', heard: { romaji: 'pointo kaado wa omochi desu ka?', french: 'Avez-vous une carte de fidélité ?' }, reply: { romaji: 'iie, motte imasen.', french: 'Non, je n\'en ai pas.' } },
  { id: 'ca-d-05', situation: 'caisse', heard: { romaji: 'fukuro wa goriyou ni narimasu ka?', french: 'Souhaitez-vous un sac ?' }, reply: { romaji: 'hai, onegaishimasu.', french: 'Oui svp.' } },
  { id: 'ca-d-06', situation: 'caisse', heard: { romaji: 'fukuro wa daiyou de gozaimasu.', french: 'Le sac est payant.' }, reply: { romaji: 'ja, irimasen.', french: 'Alors non merci.' } },
  { id: 'ca-d-07', situation: 'caisse', heard: { romaji: 'atatamemasu ka?', french: 'Je le chauffe ?' }, reply: { romaji: 'hai, onegaishimasu.', french: 'Oui svp.' } },
  { id: 'ca-d-08', situation: 'caisse', heard: { romaji: 'ohashi wa goriyou ni narimasu ka?', french: 'Avez-vous besoin de baguettes ?' }, reply: { romaji: 'onegaishimasu.', french: 'Oui svp.' } },
  { id: 'ca-d-09', situation: 'caisse', heard: { romaji: 'supuun wa goriyou ni narimasu ka?', french: 'Avez-vous besoin d\'une cuillère ?' }, reply: { romaji: 'onegaishimasu.', french: 'Oui svp.' } },
  { id: 'ca-d-10', situation: 'caisse', heard: { romaji: 'fooku wa ikutsu irimasu ka?', french: 'Combien de fourchettes ?' }, reply: { romaji: 'hitotsu de daijoubu desu.', french: 'Une seule, ça suffit.' } },
  { id: 'ca-d-11', situation: 'caisse', heard: { romaji: 'koko de omeshiagari desu ka, omochikaeri desu ka?', french: 'Sur place ou à emporter ?' }, reply: { romaji: 'mochikaeri de onegaishimasu.', french: 'À emporter svp.' } },
  { id: 'ca-d-12', situation: 'caisse', heard: { romaji: 'oshiharai wa ikaga itashimasu ka?', french: 'Comment souhaitez-vous payer ?' }, reply: { romaji: 'kaado de onegaishimasu.', french: 'Par carte svp.' } },
  { id: 'ca-d-13', situation: 'caisse', heard: { romaji: 'okaado de yoroshii desu ka?', french: 'Vous payez par carte ?' }, reply: { romaji: 'hai.', french: 'Oui.' } },
  { id: 'ca-d-14', situation: 'caisse', heard: { romaji: 'denshi-manee wa otsukai ni narimasu ka?', french: 'Souhaitez-vous payer en monnaie électronique ?' }, reply: { romaji: 'hai, onegaishimasu.', french: 'Oui svp.' } },
  { id: 'ca-d-15', situation: 'caisse', heard: { romaji: 'anshou-bangou o nyuuryoku kudasai.', french: 'Tapez votre code PIN svp.' }, reply: { romaji: 'hai.', french: 'Oui.' } },
  { id: 'ca-d-16', situation: 'caisse', heard: { romaji: 'kochira ni sain o onegaishimasu.', french: 'Signez ici svp.' }, reply: { romaji: 'hai, wakarimashita.', french: 'Oui, d\'accord.' } },
  { id: 'ca-d-17', situation: 'caisse', heard: { romaji: 'ichi-man-en kara desu ka?', french: 'Vous me donnez 10 000 yens ?' }, reply: { romaji: 'hai, onegaishimasu.', french: 'Oui svp.' } },
  { id: 'ca-d-18', situation: 'caisse', heard: { romaji: 'san-zen-en ni narimasu.', french: 'Cela fera 3 000 yens.' }, reply: { romaji: 'hai, douzo.', french: 'Oui, voilà.' } },
  { id: 'ca-d-19', situation: 'caisse', heard: { romaji: 'otsuri to reshiito desu.', french: 'Voici la monnaie et le reçu.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci beaucoup.' } },
  { id: 'ca-d-20', situation: 'caisse', heard: { romaji: 'reshiito wa goriyou desu ka?', french: 'Souhaitez-vous le reçu ?' }, reply: { romaji: 'iie, daijoubu desu.', french: 'Non merci.' } },
  { id: 'ca-d-21', situation: 'caisse', heard: { romaji: 'ryoushuusho ga hitsuyou desu ka?', french: 'Avez-vous besoin d\'une facture officielle ?' }, reply: { romaji: 'iie, daijoubu desu.', french: 'Non merci.' } },
  { id: 'ca-d-22', situation: 'caisse', heard: { romaji: 'kuupon wa otsukai ni narimasu ka?', french: 'Souhaitez-vous utiliser un coupon ?' }, reply: { romaji: 'hai, kore o tsukaitai desu.', french: 'Oui, celui-ci.' } },
  { id: 'ca-d-23', situation: 'caisse', heard: { romaji: 'waribiki ga arimasu yo.', french: 'Il y a une réduction.' }, reply: { romaji: 'honto desu ka? arigatou gozaimasu.', french: 'Vraiment ? Merci !' } },
  { id: 'ca-d-24', situation: 'caisse', heard: { romaji: 'fukuro ni o-iremashou ka?', french: 'Voulez-vous que je le mette dans le sac ?' }, reply: { romaji: 'onegaishimasu.', french: 'Oui svp.' } },
  { id: 'ca-d-25', situation: 'caisse', heard: { romaji: 'arigatou gozaimashita, mata okoshi kudasai.', french: 'Merci, revenez nous voir.' }, reply: { romaji: 'doumo arigatou.', french: 'Merci à vous.' } },

  // === Demander son chemin (20) ===
  { id: 'di-d-01', situation: 'direction', heard: { romaji: 'doushimashita ka?', french: 'Que se passe-t-il ?' }, reply: { romaji: 'michi ga wakarimasen.', french: 'Je ne connais pas le chemin.' } },
  { id: 'di-d-02', situation: 'direction', heard: { romaji: 'doko ni ikitai n desu ka?', french: 'Où voulez-vous aller ?' }, reply: { romaji: 'Asakusa ni ikitai desu.', french: 'Je veux aller à Asakusa.' } },
  { id: 'di-d-03', situation: 'direction', heard: { romaji: 'massugu itte kudasai.', french: 'Allez tout droit.' }, reply: { romaji: 'wakarimashita.', french: 'D\'accord.' } },
  { id: 'di-d-04', situation: 'direction', heard: { romaji: 'tsugi no koushaten o migi ni magatte.', french: 'Au prochain carrefour, à droite.' }, reply: { romaji: 'hai, arigatou gozaimasu.', french: 'Oui, merci.' } },
  { id: 'di-d-05', situation: 'direction', heard: { romaji: 'hidari ni magaru to mieru desu yo.', french: 'À gauche, vous le verrez.' }, reply: { romaji: 'wakarimashita, arigatou.', french: 'D\'accord, merci.' } },
  { id: 'di-d-06', situation: 'direction', heard: { romaji: 'kado o magatte sugu desu.', french: 'Juste après le coin.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },
  { id: 'di-d-07', situation: 'direction', heard: { romaji: 'tsuki-atari ni arimasu yo.', french: 'C\'est au bout de la rue.' }, reply: { romaji: 'wakarimashita.', french: 'D\'accord.' } },
  { id: 'di-d-08', situation: 'direction', heard: { romaji: 'shingou o futatsu watatte kudasai.', french: 'Traversez deux feux.' }, reply: { romaji: 'futatsu desu ne.', french: 'Deux, c\'est ça ?' } },
  { id: 'di-d-09', situation: 'direction', heard: { romaji: 'kono michi o massugu desu.', french: 'Tout droit dans cette rue.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },
  { id: 'di-d-10', situation: 'direction', heard: { romaji: 'aruite juppun gurai desu.', french: 'Environ 10 min à pied.' }, reply: { romaji: 'soko made desu ne, arigatou.', french: 'Jusque là, merci.' } },
  { id: 'di-d-11', situation: 'direction', heard: { romaji: 'tooi desu kara, takushii ga ii desu yo.', french: 'C\'est loin, prenez un taxi.' }, reply: { romaji: 'hai, sou shimasu.', french: 'Oui, je vais faire ça.' } },
  { id: 'di-d-12', situation: 'direction', heard: { romaji: 'annai-jo wa eki no naka ni arimasu.', french: 'L\'office de tourisme est dans la gare.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },
  { id: 'di-d-13', situation: 'direction', heard: { romaji: 'chikaku no kouban de kiitemite kudasai.', french: 'Demandez au koban le plus proche.' }, reply: { romaji: 'wakarimashita.', french: 'D\'accord.' } },
  { id: 'di-d-14', situation: 'direction', heard: { romaji: 'moyori no eki wa Shibuya desu.', french: 'La gare la plus proche est Shibuya.' }, reply: { romaji: 'Shibuya desu ne, arigatou.', french: 'Shibuya, merci.' } },
  { id: 'di-d-15', situation: 'direction', heard: { romaji: 'isshou ni ikimashou ka?', french: 'Voulez-vous que je vous accompagne ?' }, reply: { romaji: 'yoroshii desu ka? sumimasen.', french: 'C\'est possible ? Pardon.' } },
  { id: 'di-d-16', situation: 'direction', heard: { romaji: 'chizu o misete kudasai.', french: 'Montrez-moi la carte.' }, reply: { romaji: 'kore desu, onegaishimasu.', french: 'La voici svp.' } },
  { id: 'di-d-17', situation: 'direction', heard: { romaji: 'hashi o watatte kudasai.', french: 'Traversez le pont.' }, reply: { romaji: 'hai.', french: 'Oui.' } },
  { id: 'di-d-18', situation: 'direction', heard: { romaji: 'kono basho desu ka?', french: 'C\'est cet endroit ?' }, reply: { romaji: 'hai, koko ni ikitai desu.', french: 'Oui, c\'est là.' } },
  { id: 'di-d-19', situation: 'direction', heard: { romaji: 'soko desu yo, miete imasu ka?', french: 'C\'est juste là, vous le voyez ?' }, reply: { romaji: 'hai, miemasu! arigatou.', french: 'Oui je vois, merci !' } },
  { id: 'di-d-20', situation: 'direction', heard: { romaji: 'michi ga komi-itte iru kara, kakimashou.', french: 'Le chemin est compliqué, je vous fais un dessin.' }, reply: { romaji: 'arigatou gozaimasu, sumimasen.', french: 'Merci, pardon.' } },

  // === Transports (25) ===
  { id: 'tr-d-01', situation: 'transport', heard: { romaji: 'doko made desu ka?', french: 'Jusqu\'où ?' }, reply: { romaji: 'Kyoto made onegaishimasu.', french: 'Jusqu\'à Kyoto svp.' } },
  { id: 'tr-d-02', situation: 'transport', heard: { romaji: 'katamichi desu ka, oufuku desu ka?', french: 'Aller simple ou aller-retour ?' }, reply: { romaji: 'oufuku de onegaishimasu.', french: 'Aller-retour svp.' } },
  { id: 'tr-d-03', situation: 'transport', heard: { romaji: 'shitei-seki ni nasaimasu ka?', french: 'Place réservée ?' }, reply: { romaji: 'hai, mado-gawa de.', french: 'Oui, côté fenêtre.' } },
  { id: 'tr-d-04', situation: 'transport', heard: { romaji: 'otona nan-mei desu ka?', french: 'Combien d\'adultes ?' }, reply: { romaji: 'otona futari desu.', french: 'Deux adultes.' } },
  { id: 'tr-d-05', situation: 'transport', heard: { romaji: 'shichi-ji no shinkansen wa ikaga desu ka?', french: 'Le shinkansen de 19h vous va ?' }, reply: { romaji: 'hai, sore de onegaishimasu.', french: 'Oui, ce sera ça svp.' } },
  { id: 'tr-d-06', situation: 'transport', heard: { romaji: 'shitei-seki to jiyuu-seki, dochira ga yoroshii desu ka?', french: 'Place réservée ou libre ?' }, reply: { romaji: 'shitei-seki de onegaishimasu.', french: 'Réservée svp.' } },
  { id: 'tr-d-07', situation: 'transport', heard: { romaji: 'ni-man-en ni narimasu.', french: 'Cela fait 20 000 yens.' }, reply: { romaji: 'kaado de haraemasu ka?', french: 'Carte ok ?' } },
  { id: 'tr-d-08', situation: 'transport', heard: { romaji: 'go-ban-sen kara desu.', french: 'C\'est sur la voie 5.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },
  { id: 'tr-d-09', situation: 'transport', heard: { romaji: 'kono densha wa Tokyo iki desu.', french: 'Ce train va à Tokyo.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },
  { id: 'tr-d-10', situation: 'transport', heard: { romaji: 'tsugi no eki wa Kyoto desu.', french: 'Prochaine gare : Kyoto.' }, reply: { romaji: 'wakarimashita.', french: 'D\'accord.' } },
  { id: 'tr-d-11', situation: 'transport', heard: { romaji: 'norikae wa Shibuya desu.', french: 'Correspondance à Shibuya.' }, reply: { romaji: 'wakarimashita.', french: 'D\'accord.' } },
  { id: 'tr-d-12', situation: 'transport', heard: { romaji: 'okurete imasu, moushiwake gozaimasen.', french: 'Nous avons du retard, désolé.' }, reply: { romaji: 'daijoubu desu.', french: 'Pas grave.' } },
  { id: 'tr-d-13', situation: 'transport', heard: { romaji: 'kono seki wa aite imasu ka?', french: 'Cette place est libre ?' }, reply: { romaji: 'hai, douzo.', french: 'Oui, je vous en prie.' } },
  { id: 'tr-d-14', situation: 'transport', heard: { romaji: 'kippu o haiken shimasu.', french: 'Je vérifie votre billet.' }, reply: { romaji: 'douzo.', french: 'Je vous en prie.' } },
  { id: 'tr-d-15', situation: 'transport', heard: { romaji: 'tsugi de orimashou ka?', french: 'On descend au prochain ?' }, reply: { romaji: 'hai, soko de orimasu.', french: 'Oui, je descends là.' } },
  { id: 'tr-d-16', situation: 'transport', heard: { romaji: 'doa ga akimasu yo, ki o tsukete.', french: 'Porte qui s\'ouvre, attention.' }, reply: { romaji: 'hai.', french: 'Oui.' } },
  { id: 'tr-d-17', situation: 'transport', heard: { romaji: 'doko made ikimasu ka?', french: 'Où allez-vous ?' }, reply: { romaji: 'kono jusho ni onegaishimasu.', french: 'À cette adresse svp.' } },
  { id: 'tr-d-18', situation: 'transport', heard: { romaji: 'ryoushuusho wa ikaga desu ka?', french: 'Un reçu ?' }, reply: { romaji: 'onegaishimasu.', french: 'Oui svp.' } },
  { id: 'tr-d-19', situation: 'transport', heard: { romaji: 'kochira de yoroshii desu ka?', french: 'Ici c\'est bon ?' }, reply: { romaji: 'hai, koko de daijoubu desu.', french: 'Oui, ici c\'est bon.' } },
  { id: 'tr-d-20', situation: 'transport', heard: { romaji: 'IC kaado wa otsukai ni narimasu ka?', french: 'Vous utilisez une IC card ?' }, reply: { romaji: 'hai, suica ga arimasu.', french: 'Oui, j\'ai une Suica.' } },
  { id: 'tr-d-21', situation: 'transport', heard: { romaji: 'chaaji ga tarinai desu.', french: 'Il manque de la recharge.' }, reply: { romaji: 'doko de chaaji dekimasu ka?', french: 'Où peut-on recharger ?' } },
  { id: 'tr-d-22', situation: 'transport', heard: { romaji: 'kaisatsu wa achira desu.', french: 'Le portique est par là.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },
  { id: 'tr-d-23', situation: 'transport', heard: { romaji: 'san-ban no basu wa go-ban noriba desu.', french: 'Le bus 3 part de l\'arrêt 5.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },
  { id: 'tr-d-24', situation: 'transport', heard: { romaji: 'kakueki to kyuukou, dochira ga ii desu ka?', french: 'Omnibus ou express ?' }, reply: { romaji: 'kyuukou de onegaishimasu.', french: 'Express svp.' } },
  { id: 'tr-d-25', situation: 'transport', heard: { romaji: 'shuuden wa juu-ni-ji desu.', french: 'Dernier train à minuit.' }, reply: { romaji: 'wakarimashita, arigatou.', french: 'D\'accord, merci.' } },

  // === Hôtel & Ryokan (25) ===
  { id: 'ho-d-01', situation: 'hotel', heard: { romaji: 'irasshaimase, oyoyaku no onamae wa?', french: 'Bienvenue, à quel nom est la réservation ?' }, reply: { romaji: 'Pierre desu.', french: 'Pierre.' } },
  { id: 'ho-d-02', situation: 'hotel', heard: { romaji: 'pasupooto o haiken shimasu.', french: 'Je vérifie votre passeport.' }, reply: { romaji: 'douzo.', french: 'Voici.' } },
  { id: 'ho-d-03', situation: 'hotel', heard: { romaji: 'kochira ni go-shomei o onegaishimasu.', french: 'Signez ici svp.' }, reply: { romaji: 'hai, wakarimashita.', french: 'Oui d\'accord.' } },
  { id: 'ho-d-04', situation: 'hotel', heard: { romaji: 'ru-mu kii wa kochira desu.', french: 'Voici votre clé.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },
  { id: 'ho-d-05', situation: 'hotel', heard: { romaji: 'oheya wa go-kai no go-zero-ni desu.', french: 'Votre chambre est au 5e, n°502.' }, reply: { romaji: 'wakarimashita.', french: 'D\'accord.' } },
  { id: 'ho-d-06', situation: 'hotel', heard: { romaji: 'wifi no pasuwaado wa kochira desu.', french: 'Voici le mot de passe wifi.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },
  { id: 'ho-d-07', situation: 'hotel', heard: { romaji: 'choushoku wa nan-ji ga yoroshii desu ka?', french: 'À quelle heure le petit-déj ?' }, reply: { romaji: 'shichi-ji onegaishimasu.', french: 'À 7h svp.' } },
  { id: 'ho-d-08', situation: 'hotel', heard: { romaji: 'onsen wa nijuu-yo-jikan riyou dekimasu.', french: 'L\'onsen est ouvert 24h/24.' }, reply: { romaji: 'wakarimashita.', french: 'D\'accord.' } },
  { id: 'ho-d-09', situation: 'hotel', heard: { romaji: 'yukata wa heya ni arimasu.', french: 'Le yukata est dans la chambre.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },
  { id: 'ho-d-10', situation: 'hotel', heard: { romaji: 'ofuro wa ni-kai ni gozaimasu.', french: 'Le bain est au 2e étage.' }, reply: { romaji: 'wakarimashita.', french: 'D\'accord.' } },
  { id: 'ho-d-11', situation: 'hotel', heard: { romaji: 'nani ka go-youken desu ka?', french: 'Vous avez besoin de quelque chose ?' }, reply: { romaji: 'taoru o mou ichi-mai onegaishimasu.', french: 'Une serviette de plus svp.' } },
  { id: 'ho-d-12', situation: 'hotel', heard: { romaji: 'kashikomarimashita.', french: 'C\'est noté.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },
  { id: 'ho-d-13', situation: 'hotel', heard: { romaji: 'souji wa ikaga itashimashou ka?', french: 'Voulez-vous le ménage ?' }, reply: { romaji: 'onegaishimasu.', french: 'Oui svp.' } },
  { id: 'ho-d-14', situation: 'hotel', heard: { romaji: 'oheya wa shizuka desu ka?', french: 'La chambre est calme ?' }, reply: { romaji: 'hai, totemo.', french: 'Oui, très.' } },
  { id: 'ho-d-15', situation: 'hotel', heard: { romaji: 'nimotsu o oazukari shimashou ka?', french: 'Voulez-vous que je garde vos bagages ?' }, reply: { romaji: 'onegaishimasu.', french: 'Oui svp.' } },
  { id: 'ho-d-16', situation: 'hotel', heard: { romaji: 'takkyuubin de okurimasu ka?', french: 'Vous voulez l\'envoyer en livraison ?' }, reply: { romaji: 'iie, daijoubu desu.', french: 'Non merci.' } },
  { id: 'ho-d-17', situation: 'hotel', heard: { romaji: 'doushita no desu ka?', french: 'Que se passe-t-il ?' }, reply: { romaji: 'kagi o nakushimashita.', french: 'J\'ai perdu ma clé.' } },
  { id: 'ho-d-18', situation: 'hotel', heard: { romaji: 'eakon wa daijoubu desu ka?', french: 'La climatisation va ?' }, reply: { romaji: 'kowarete iru you desu.', french: 'On dirait qu\'elle est cassée.' } },
  { id: 'ho-d-19', situation: 'hotel', heard: { romaji: 'chekkuauto desu ne.', french: 'C\'est un check-out ?' }, reply: { romaji: 'hai, onegaishimasu.', french: 'Oui svp.' } },
  { id: 'ho-d-20', situation: 'hotel', heard: { romaji: 'minibaa wa otsukai ni narimashita ka?', french: 'Avez-vous utilisé le minibar ?' }, reply: { romaji: 'iie, tsukatte imasen.', french: 'Non.' } },
  { id: 'ho-d-21', situation: 'hotel', heard: { romaji: 'ryoukin wa zen-bu de juuni-man-en desu.', french: 'Le total est de 120 000 yens.' }, reply: { romaji: 'kaado de onegaishimasu.', french: 'Par carte svp.' } },
  { id: 'ho-d-22', situation: 'hotel', heard: { romaji: 'ryoushuusho desu, douzo.', french: 'Voici votre reçu.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },
  { id: 'ho-d-23', situation: 'hotel', heard: { romaji: 'ki o tsukete go-kaeri kudasai.', french: 'Rentrez bien.' }, reply: { romaji: 'arigatou gozaimashita.', french: 'Merci beaucoup.' } },
  { id: 'ho-d-24', situation: 'hotel', heard: { romaji: 'mata no go-riyou o omachi shite imasu.', french: 'Au plaisir de vous revoir.' }, reply: { romaji: 'arigatou, mata kimasu.', french: 'Merci, je reviendrai.' } },
  { id: 'ho-d-25', situation: 'hotel', heard: { romaji: 'asagohan wa shichi-ji kara desu.', french: 'Le petit-déj est à partir de 7h.' }, reply: { romaji: 'wakarimashita, arigatou.', french: 'D\'accord, merci.' } },

  // === Visites & sites (20) ===
  { id: 'vi-d-01', situation: 'visite', heard: { romaji: 'irasshaimase, kankou desu ka?', french: 'Bienvenue, vous visitez ?' }, reply: { romaji: 'hai, otera o mitai desu.', french: 'Oui, je voudrais voir le temple.' } },
  { id: 'vi-d-02', situation: 'visite', heard: { romaji: 'otona ni-mai desu ka?', french: 'Deux billets adulte ?' }, reply: { romaji: 'hai, onegaishimasu.', french: 'Oui svp.' } },
  { id: 'vi-d-03', situation: 'visite', heard: { romaji: 'nyuujou-ryou wa sen-en desu.', french: 'L\'entrée coûte 1 000 yens.' }, reply: { romaji: 'kaado wa daijoubu desu ka?', french: 'Carte ok ?' } },
  { id: 'vi-d-04', situation: 'visite', heard: { romaji: 'kochira ga annai-zu desu.', french: 'Voici le plan.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },
  { id: 'vi-d-05', situation: 'visite', heard: { romaji: 'ato san-juppun de heikan desu.', french: 'On ferme dans 30 min.' }, reply: { romaji: 'wakarimashita.', french: 'D\'accord.' } },
  { id: 'vi-d-06', situation: 'visite', heard: { romaji: 'shashin wa daijoubu desu.', french: 'La photo est OK.' }, reply: { romaji: 'arigatou gozaimasu!', french: 'Merci !' } },
  { id: 'vi-d-07', situation: 'visite', heard: { romaji: 'kochira de wa shashin wa go-enryo kudasai.', french: 'Pas de photo ici svp.' }, reply: { romaji: 'sumimasen, wakarimashita.', french: 'Pardon, d\'accord.' } },
  { id: 'vi-d-08', situation: 'visite', heard: { romaji: 'okutsu o nuide kudasai.', french: 'Enlevez vos chaussures svp.' }, reply: { romaji: 'hai, wakarimashita.', french: 'Oui d\'accord.' } },
  { id: 'vi-d-09', situation: 'visite', heard: { romaji: 'shizuka ni onegaishimasu.', french: 'Silence svp.' }, reply: { romaji: 'hai, sumimasen.', french: 'Oui, pardon.' } },
  { id: 'vi-d-10', situation: 'visite', heard: { romaji: 'satsuei-kinshi desu.', french: 'Photographie interdite.' }, reply: { romaji: 'wakarimashita, sumimasen.', french: 'D\'accord, pardon.' } },
  { id: 'vi-d-11', situation: 'visite', heard: { romaji: 'guruupu desu ka?', french: 'En groupe ?' }, reply: { romaji: 'iie, futari dake desu.', french: 'Non, juste deux.' } },
  { id: 'vi-d-12', situation: 'visite', heard: { romaji: 'kankou-annai wa muryou desu.', french: 'Le guide est gratuit.' }, reply: { romaji: 'sugoi, arigatou gozaimasu.', french: 'Génial, merci !' } },
  { id: 'vi-d-13', situation: 'visite', heard: { romaji: 'eigyou-jikan wa juu-shichi-ji made desu.', french: 'Ouvert jusqu\'à 17h.' }, reply: { romaji: 'wakarimashita.', french: 'D\'accord.' } },
  { id: 'vi-d-14', situation: 'visite', heard: { romaji: 'kyou wa kyuukan-bi desu.', french: 'Aujourd\'hui c\'est fermé.' }, reply: { romaji: 'zannen desu, mata kimasu.', french: 'Dommage, je reviendrai.' } },
  { id: 'vi-d-15', situation: 'visite', heard: { romaji: 'deguchi wa achira desu.', french: 'La sortie est par là.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },
  { id: 'vi-d-16', situation: 'visite', heard: { romaji: 'kinen no shashin wa ikaga desu ka?', french: 'Une photo souvenir ?' }, reply: { romaji: 'onegaishimasu.', french: 'Oui svp.' } },
  { id: 'vi-d-17', situation: 'visite', heard: { romaji: 'muryou no panfuretto desu, douzo.', french: 'Brochure gratuite, prenez.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },
  { id: 'vi-d-18', situation: 'visite', heard: { romaji: 'tenboudai wa juuni-kai desu.', french: 'Le belvédère est au 12e.' }, reply: { romaji: 'wakarimashita.', french: 'D\'accord.' } },
  { id: 'vi-d-19', situation: 'visite', heard: { romaji: 'goshuin-chou wa motte imasu ka?', french: 'Avez-vous un carnet de sceaux ?' }, reply: { romaji: 'hai, onegaishimasu.', french: 'Oui svp.' } },
  { id: 'vi-d-20', situation: 'visite', heard: { romaji: 'yukkuri goran kudasai.', french: 'Prenez votre temps.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci.' } },

  // === Shopping & souvenirs (20) ===
  { id: 'sh-d-01', situation: 'shopping', heard: { romaji: 'irasshaimase!', french: 'Bienvenue !' }, reply: { romaji: 'konnichiwa, miteimasu.', french: 'Bonjour, je regarde.' } },
  { id: 'sh-d-02', situation: 'shopping', heard: { romaji: 'nani ka osagashi desu ka?', french: 'Vous cherchez quelque chose ?' }, reply: { romaji: 'iie, miteiru dake desu.', french: 'Non, je regarde seulement.' } },
  { id: 'sh-d-03', situation: 'shopping', heard: { romaji: 'shichaku shitemo ii desu yo.', french: 'Vous pouvez essayer.' }, reply: { romaji: 'onegaishimasu.', french: 'Oui svp.' } },
  { id: 'sh-d-04', situation: 'shopping', heard: { romaji: 'saizu wa nan desu ka?', french: 'Quelle taille ?' }, reply: { romaji: 'emu-saizu desu.', french: 'Taille M.' } },
  { id: 'sh-d-05', situation: 'shopping', heard: { romaji: 'kochira no shiroi shatsu wa ikaga desu ka?', french: 'Cette chemise blanche ?' }, reply: { romaji: 'kawaii desu ne.', french: 'Elle est jolie.' } },
  { id: 'sh-d-06', situation: 'shopping', heard: { romaji: 'shichakushitsu wa kochira desu.', french: 'Cabine d\'essayage par ici.' }, reply: { romaji: 'arigatou.', french: 'Merci.' } },
  { id: 'sh-d-07', situation: 'shopping', heard: { romaji: 'ikaga deshita ka?', french: 'Cela vous a plu ?' }, reply: { romaji: 'chotto chiisai desu.', french: 'Un peu petit.' } },
  { id: 'sh-d-08', situation: 'shopping', heard: { romaji: 'ookii saizu mo arimasu yo.', french: 'Nous avons aussi en plus grand.' }, reply: { romaji: 'ja, eru de onegaishimasu.', french: 'Alors, en L svp.' } },
  { id: 'sh-d-09', situation: 'shopping', heard: { romaji: 'moushiwake gozaimasen, aka wa zaiko-girre desu.', french: 'Désolé, le rouge est en rupture.' }, reply: { romaji: 'ja, ao de onegaishimasu.', french: 'Alors, en bleu svp.' } },
  { id: 'sh-d-10', situation: 'shopping', heard: { romaji: 'menzei desu ka?', french: 'Hors-taxe ?' }, reply: { romaji: 'hai, gaikokujin desu.', french: 'Oui je suis étranger.' } },
  { id: 'sh-d-11', situation: 'shopping', heard: { romaji: 'pasupooto o haiken shimasu.', french: 'Votre passeport svp.' }, reply: { romaji: 'douzo.', french: 'Voici.' } },
  { id: 'sh-d-12', situation: 'shopping', heard: { romaji: 'omiyage desu ka?', french: 'C\'est un souvenir ?' }, reply: { romaji: 'hai, kazoku ni.', french: 'Oui, pour la famille.' } },
  { id: 'sh-d-13', situation: 'shopping', heard: { romaji: 'okutsu wa nan-saizu desu ka?', french: 'Quelle pointure ?' }, reply: { romaji: 'nijuu-roku desu.', french: '26.' } },
  { id: 'sh-d-14', situation: 'shopping', heard: { romaji: 'kochira no kaban wa hyaku-paasento honkawa desu.', french: 'Ce sac est 100% cuir.' }, reply: { romaji: 'ki ni iri-mashita.', french: 'Ça me plaît.' } },
  { id: 'sh-d-15', situation: 'shopping', heard: { romaji: 'gokei san-man-en ni narimasu.', french: 'Total : 30 000 yens.' }, reply: { romaji: 'kaado de onegaishimasu.', french: 'Par carte svp.' } },
  { id: 'sh-d-16', situation: 'shopping', heard: { romaji: 'yoroshii desu ka?', french: 'Cela vous va ?' }, reply: { romaji: 'hai, sore ni shimasu.', french: 'Oui, je prends ça.' } },
  { id: 'sh-d-17', situation: 'shopping', heard: { romaji: 'henpin wa nanoka inai desu.', french: 'Retour sous 7 jours.' }, reply: { romaji: 'wakarimashita.', french: 'D\'accord.' } },
  { id: 'sh-d-18', situation: 'shopping', heard: { romaji: 'purezento you ni shimasu ka?', french: 'Je l\'emballe pour cadeau ?' }, reply: { romaji: 'onegaishimasu.', french: 'Oui svp.' } },
  { id: 'sh-d-19', situation: 'shopping', heard: { romaji: 'fukuro wa fuyou desu ka?', french: 'Avez-vous besoin d\'un sac ?' }, reply: { romaji: 'iie, daijoubu desu.', french: 'Non merci.' } },
  { id: 'sh-d-20', situation: 'shopping', heard: { romaji: 'arigatou gozaimashita, mata douzo.', french: 'Merci, revenez.' }, reply: { romaji: 'doumo arigatou.', french: 'Merci.' } },
];
