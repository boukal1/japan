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
  { id: 'sd-d-12', situation: 'salutations-demandes', heard: { romaji: 'oshigoto wa nan desu ka?', french: 'Quel est votre métier ?' }, reply: { romaji: 'enjinia desu.', french: 'Je suis ingénieur.' } },
  { id: 'sd-d-13', situation: 'salutations-demandes', heard: { romaji: 'nan-sai desu ka?', french: 'Quel âge avez-vous ?' }, reply: { romaji: 'san-juu-go-sai desu.', french: 'J\'ai 35 ans.' } },

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
  { id: 'sd-d-35', situation: 'salutations-demandes', heard: { romaji: 'omedetou gozaimasu.', french: 'Félicitations.' }, reply: { romaji: 'arigatou gozaimasu.', french: 'Merci beaucoup.' } },
  { id: 'sd-d-36', situation: 'salutations-demandes', heard: { romaji: 'tanjoubi omedetou.', french: 'Joyeux anniversaire.' }, reply: { romaji: 'arigatou!', french: 'Merci !' } },
  { id: 'sd-d-37', situation: 'salutations-demandes', heard: { romaji: 'ogenki de.', french: 'Portez-vous bien.' }, reply: { romaji: 'anata mo.', french: 'Vous aussi.' } },

  // Au revoir
  { id: 'sd-d-38', situation: 'salutations-demandes', heard: { romaji: 'mata ashita.', french: 'À demain.' }, reply: { romaji: 'hai, mata ashita.', french: 'Oui, à demain.' } },
  { id: 'sd-d-39', situation: 'salutations-demandes', heard: { romaji: 'matane.', french: 'À plus.' }, reply: { romaji: 'matane!', french: 'À plus !' } },
  { id: 'sd-d-40', situation: 'salutations-demandes', heard: { romaji: 'ki o tsukete kaette ne.', french: 'Rentre bien.' }, reply: { romaji: 'hai, arigatou.', french: 'Oui, merci.' } },

  // Quotidien
  { id: 'sd-d-41', situation: 'salutations-demandes', heard: { romaji: 'nan ka goyou desu ka?', french: 'Avez-vous besoin de quelque chose ?' }, reply: { romaji: 'iie, daijoubu desu.', french: 'Non, ça va.' } },
  { id: 'sd-d-42', situation: 'salutations-demandes', heard: { romaji: 'douzo, koshi kakete kudasai.', french: 'Asseyez-vous svp.' }, reply: { romaji: 'shitsurei shimasu.', french: 'Pardon, oui.' } },
  { id: 'sd-d-43', situation: 'salutations-demandes', heard: { romaji: 'koohii wa ikaga desu ka?', french: 'Voulez-vous un café ?' }, reply: { romaji: 'onegai shimasu.', french: 'Oui svp.' } },

  // Émotions
  { id: 'sd-d-44', situation: 'salutations-demandes', heard: { romaji: 'kanashii desu ka?', french: 'Êtes-vous triste ?' }, reply: { romaji: 'iie, daijoubu desu.', french: 'Non, ça va.' } },
  { id: 'sd-d-45', situation: 'salutations-demandes', heard: { romaji: 'ureshii desu ne.', french: 'Vous avez l\'air content.' }, reply: { romaji: 'hai, totemo!', french: 'Oui, beaucoup !' } },

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
];
