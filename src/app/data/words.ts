import { VocabWord } from '../models/word.model';

export const WORDS: VocabWord[] = [
  // Salutations (15)
  { id: 'sd-w-01', situation: 'salutations-demandes', romaji: 'konnichiwa', french: 'bonjour' },
  { id: 'sd-w-02', situation: 'salutations-demandes', romaji: 'ohayou', french: 'bonjour (matin, fam.)' },
  { id: 'sd-w-03', situation: 'salutations-demandes', romaji: 'ohayougozaimasu', french: 'bonjour (matin, poli)' },
  { id: 'sd-w-04', situation: 'salutations-demandes', romaji: 'konbanwa', french: 'bonsoir' },
  { id: 'sd-w-05', situation: 'salutations-demandes', romaji: 'oyasumi', french: 'bonne nuit (fam.)' },
  { id: 'sd-w-06', situation: 'salutations-demandes', romaji: 'oyasuminasai', french: 'bonne nuit (poli)' },
  { id: 'sd-w-07', situation: 'salutations-demandes', romaji: 'sayounara', french: 'au revoir' },
  { id: 'sd-w-08', situation: 'salutations-demandes', romaji: 'matane', french: 'à plus tard' },
  { id: 'sd-w-09', situation: 'salutations-demandes', romaji: 'ja', french: 'bon, alors (transition)' },
  { id: 'sd-w-10', situation: 'salutations-demandes', romaji: 'hajimemashite', french: 'enchanté (1ère rencontre)' },
  { id: 'sd-w-11', situation: 'salutations-demandes', romaji: 'yoroshiku', french: 'enchanté / je compte sur vous' },
  { id: 'sd-w-12', situation: 'salutations-demandes', romaji: 'tadaima', french: 'je suis rentré' },
  { id: 'sd-w-13', situation: 'salutations-demandes', romaji: 'okaeri', french: 'bienvenue à la maison' },
  { id: 'sd-w-14', situation: 'salutations-demandes', romaji: 'ittekimasu', french: 'j\'y vais (en partant)' },
  { id: 'sd-w-15', situation: 'salutations-demandes', romaji: 'itterasshai', french: 'va et reviens' },

  // Remerciements & excuses (10)
  { id: 'sd-w-16', situation: 'salutations-demandes', romaji: 'arigatou', french: 'merci' },
  { id: 'sd-w-17', situation: 'salutations-demandes', romaji: 'arigatougozaimasu', french: 'merci beaucoup (poli)' },
  { id: 'sd-w-18', situation: 'salutations-demandes', romaji: 'doumo', french: 'merci / salut (fam.)' },
  { id: 'sd-w-19', situation: 'salutations-demandes', romaji: 'doitashimashite', french: 'de rien' },
  { id: 'sd-w-20', situation: 'salutations-demandes', romaji: 'sumimasen', french: 'excusez-moi / pardon' },
  { id: 'sd-w-21', situation: 'salutations-demandes', romaji: 'gomen', french: 'désolé (fam.)' },
  { id: 'sd-w-22', situation: 'salutations-demandes', romaji: 'gomennasai', french: 'pardon (poli)' },
  { id: 'sd-w-23', situation: 'salutations-demandes', romaji: 'shitsureishimasu', french: 'excusez-moi (entrer/sortir)' },
  { id: 'sd-w-24', situation: 'salutations-demandes', romaji: 'otsukaresama', french: 'bon travail (à un collègue)' },
  { id: 'sd-w-25', situation: 'salutations-demandes', romaji: 'itadakimasu', french: 'bon appétit (avant repas)' },

  // Réponses & politesse (10)
  { id: 'sd-w-26', situation: 'salutations-demandes', romaji: 'hai', french: 'oui' },
  { id: 'sd-w-27', situation: 'salutations-demandes', romaji: 'iie', french: 'non' },
  { id: 'sd-w-28', situation: 'salutations-demandes', romaji: 'onegaishimasu', french: 's\'il vous plaît (poli)' },
  { id: 'sd-w-29', situation: 'salutations-demandes', romaji: 'kudasai', french: 's\'il vous plaît / donnez-moi' },
  { id: 'sd-w-30', situation: 'salutations-demandes', romaji: 'daijoubu', french: 'ça va / pas de souci' },
  { id: 'sd-w-31', situation: 'salutations-demandes', romaji: 'mochiron', french: 'bien sûr' },
  { id: 'sd-w-32', situation: 'salutations-demandes', romaji: 'ee', french: 'oui (fam.)' },
  { id: 'sd-w-33', situation: 'salutations-demandes', romaji: 'dame', french: 'non / interdit' },
  { id: 'sd-w-34', situation: 'salutations-demandes', romaji: 'ii', french: 'bon / OK' },
  { id: 'sd-w-35', situation: 'salutations-demandes', romaji: 'zenzen', french: 'pas du tout' },

  // Demander aide & infos (15)
  { id: 'sd-w-36', situation: 'salutations-demandes', romaji: 'tasukete', french: 'à l\'aide !' },
  { id: 'sd-w-37', situation: 'salutations-demandes', romaji: 'tetsudatte', french: 'aide-moi (à faire)' },
  { id: 'sd-w-38', situation: 'salutations-demandes', romaji: 'wakaru', french: 'comprendre' },
  { id: 'sd-w-39', situation: 'salutations-demandes', romaji: 'wakarimasen', french: 'je ne comprends pas' },
  { id: 'sd-w-40', situation: 'salutations-demandes', romaji: 'shiranai', french: 'je ne sais pas' },
  { id: 'sd-w-41', situation: 'salutations-demandes', romaji: 'shitsumon', french: 'question' },
  { id: 'sd-w-42', situation: 'salutations-demandes', romaji: 'mouichido', french: 'encore une fois' },
  { id: 'sd-w-43', situation: 'salutations-demandes', romaji: 'yukkuri', french: 'lentement' },
  { id: 'sd-w-44', situation: 'salutations-demandes', romaji: 'moshimoshi', french: 'allô (téléphone)' },
  { id: 'sd-w-45', situation: 'salutations-demandes', romaji: 'nandesu ka', french: 'qu\'est-ce que c\'est' },
  { id: 'sd-w-46', situation: 'salutations-demandes', romaji: 'doko', french: 'où' },
  { id: 'sd-w-47', situation: 'salutations-demandes', romaji: 'nani', french: 'quoi' },
  { id: 'sd-w-48', situation: 'salutations-demandes', romaji: 'dare', french: 'qui' },
  { id: 'sd-w-49', situation: 'salutations-demandes', romaji: 'itsu', french: 'quand' },
  { id: 'sd-w-50', situation: 'salutations-demandes', romaji: 'ikura', french: 'combien (prix)' },

  // === Au restaurant ===
  // Lieu & réservation (10)
  { id: 're-w-01', situation: 'restaurant', romaji: 'resutoran', french: 'restaurant' },
  { id: 're-w-02', situation: 'restaurant', romaji: 'yoyaku', french: 'réservation' },
  { id: 're-w-03', situation: 'restaurant', romaji: 'seki', french: 'place / siège' },
  { id: 're-w-04', situation: 'restaurant', romaji: 'teeburu', french: 'table' },
  { id: 're-w-05', situation: 'restaurant', romaji: 'kauntaa', french: 'comptoir / bar' },
  { id: 're-w-06', situation: 'restaurant', romaji: 'mado-gawa', french: 'côté fenêtre' },
  { id: 're-w-07', situation: 'restaurant', romaji: 'ninzuu', french: 'nombre de personnes' },
  { id: 're-w-08', situation: 'restaurant', romaji: 'ohitorisama', french: 'une personne (poli)' },
  { id: 're-w-09', situation: 'restaurant', romaji: 'futari', french: 'deux personnes' },
  { id: 're-w-10', situation: 'restaurant', romaji: 'ten\'in', french: 'serveur / employé' },

  // Menu & recommandations (10)
  { id: 're-w-11', situation: 'restaurant', romaji: 'menyuu', french: 'menu / carte' },
  { id: 're-w-12', situation: 'restaurant', romaji: 'osusume', french: 'recommandation' },
  { id: 're-w-13', situation: 'restaurant', romaji: 'meibutsu', french: 'spécialité (locale)' },
  { id: 're-w-14', situation: 'restaurant', romaji: 'tokusen', french: 'sélection (du chef)' },
  { id: 're-w-15', situation: 'restaurant', romaji: 'teishoku', french: 'menu fixe (déjeuner)' },
  { id: 're-w-16', situation: 'restaurant', romaji: 'setto', french: 'formule / set' },
  { id: 're-w-17', situation: 'restaurant', romaji: 'ryouri', french: 'plat / cuisine' },
  { id: 're-w-18', situation: 'restaurant', romaji: 'zensai', french: 'entrée / hors-d\'œuvre' },
  { id: 're-w-19', situation: 'restaurant', romaji: 'shushoku', french: 'plat principal' },
  { id: 're-w-20', situation: 'restaurant', romaji: 'dezaato', french: 'dessert' },

  // Boissons & cuisine (10)
  { id: 're-w-21', situation: 'restaurant', romaji: 'nomimono', french: 'boisson' },
  { id: 're-w-22', situation: 'restaurant', romaji: 'tabemono', french: 'nourriture' },
  { id: 're-w-23', situation: 'restaurant', romaji: 'mizu', french: 'eau' },
  { id: 're-w-24', situation: 'restaurant', romaji: 'ocha', french: 'thé vert' },
  { id: 're-w-25', situation: 'restaurant', romaji: 'koohii', french: 'café' },
  { id: 're-w-26', situation: 'restaurant', romaji: 'biiru', french: 'bière' },
  { id: 're-w-27', situation: 'restaurant', romaji: 'wain', french: 'vin' },
  { id: 're-w-28', situation: 'restaurant', romaji: 'nihonshu', french: 'saké (japonais)' },
  { id: 're-w-29', situation: 'restaurant', romaji: 'juusu', french: 'jus' },
  { id: 're-w-30', situation: 'restaurant', romaji: 'kanpai', french: 'santé ! (trinquer)' },

  // Saveurs & qualité (5)
  { id: 're-w-31', situation: 'restaurant', romaji: 'oishii', french: 'délicieux' },
  { id: 're-w-32', situation: 'restaurant', romaji: 'amai', french: 'sucré' },
  { id: 're-w-33', situation: 'restaurant', romaji: 'karai', french: 'épicé' },
  { id: 're-w-34', situation: 'restaurant', romaji: 'atsui', french: 'chaud (température)' },
  { id: 're-w-35', situation: 'restaurant', romaji: 'tsumetai', french: 'froid (boisson/plat)' },

  // Commander & restrictions (5)
  { id: 're-w-36', situation: 'restaurant', romaji: 'chuumon', french: 'commande' },
  { id: 're-w-37', situation: 'restaurant', romaji: 'mochikaeri', french: 'à emporter' },
  { id: 're-w-38', situation: 'restaurant', romaji: 'arerugii', french: 'allergie' },
  { id: 're-w-39', situation: 'restaurant', romaji: 'bejitarian', french: 'végétarien' },
  { id: 're-w-40', situation: 'restaurant', romaji: 'nigate', french: 'ne pas aimer (plat)' },

  // Payer & remercier (10)
  { id: 're-w-41', situation: 'restaurant', romaji: 'okanjou', french: 'addition' },
  { id: 're-w-42', situation: 'restaurant', romaji: 'okaikei', french: 'addition (poli)' },
  { id: 're-w-43', situation: 'restaurant', romaji: 'genkin', french: 'espèces' },
  { id: 're-w-44', situation: 'restaurant', romaji: 'kaado', french: 'carte (bancaire)' },
  { id: 're-w-45', situation: 'restaurant', romaji: 'reshiito', french: 'reçu' },
  { id: 're-w-46', situation: 'restaurant', romaji: 'ryoushuusho', french: 'facture officielle' },
  { id: 're-w-47', situation: 'restaurant', romaji: 'otsuri', french: 'monnaie (rendue)' },
  { id: 're-w-48', situation: 'restaurant', romaji: 'zei', french: 'taxe' },
  { id: 're-w-49', situation: 'restaurant', romaji: 'okane', french: 'argent' },
  { id: 're-w-50', situation: 'restaurant', romaji: 'gochisousama', french: 'merci pour le repas' },

  // === À la caisse (35) ===
  // Lieu & personnes (5)
  { id: 'ca-w-01', situation: 'caisse', romaji: 'reji', french: 'caisse' },
  { id: 'ca-w-02', situation: 'caisse', romaji: 'ten\'in', french: 'employé / caissier' },
  { id: 'ca-w-03', situation: 'caisse', romaji: 'okyakusan', french: 'client' },
  { id: 'ca-w-04', situation: 'caisse', romaji: 'mise', french: 'magasin' },
  { id: 'ca-w-05', situation: 'caisse', romaji: 'konbini', french: 'supérette' },

  // Argent & paiement (12)
  { id: 'ca-w-06', situation: 'caisse', romaji: 'okane', french: 'argent' },
  { id: 'ca-w-07', situation: 'caisse', romaji: 'genkin', french: 'espèces' },
  { id: 'ca-w-08', situation: 'caisse', romaji: 'kaado', french: 'carte (bancaire)' },
  { id: 'ca-w-09', situation: 'caisse', romaji: 'kurejitto-kaado', french: 'carte de crédit' },
  { id: 'ca-w-10', situation: 'caisse', romaji: 'denshi-manee', french: 'monnaie électronique' },
  { id: 'ca-w-11', situation: 'caisse', romaji: 'otsuri', french: 'monnaie rendue' },
  { id: 'ca-w-12', situation: 'caisse', romaji: 'en', french: 'yen' },
  { id: 'ca-w-13', situation: 'caisse', romaji: 'nedan', french: 'prix' },
  { id: 'ca-w-14', situation: 'caisse', romaji: 'soukei', french: 'total' },
  { id: 'ca-w-15', situation: 'caisse', romaji: 'zei', french: 'taxe' },
  { id: 'ca-w-16', situation: 'caisse', romaji: 'shouhizei', french: 'TVA / taxe à la conso' },
  { id: 'ca-w-17', situation: 'caisse', romaji: 'zeikomi', french: 'TTC (taxe incluse)' },

  // Réductions & fidélité (4)
  { id: 'ca-w-18', situation: 'caisse', romaji: 'waribiki', french: 'réduction' },
  { id: 'ca-w-19', situation: 'caisse', romaji: 'seeru', french: 'solde' },
  { id: 'ca-w-20', situation: 'caisse', romaji: 'kuupon', french: 'coupon' },
  { id: 'ca-w-21', situation: 'caisse', romaji: 'pointo', french: 'points (fidélité)' },

  // Articles & emballage (8)
  { id: 'ca-w-22', situation: 'caisse', romaji: 'shouhin', french: 'article / produit' },
  { id: 'ca-w-23', situation: 'caisse', romaji: 'fukuro', french: 'sac' },
  { id: 'ca-w-24', situation: 'caisse', romaji: 'rejibukuro', french: 'sac plastique (caisse)' },
  { id: 'ca-w-25', situation: 'caisse', romaji: 'maibaggu', french: 'sac réutilisable (apporté)' },
  { id: 'ca-w-26', situation: 'caisse', romaji: 'baakoodo', french: 'code-barres' },
  { id: 'ca-w-27', situation: 'caisse', romaji: 'reshiito', french: 'reçu' },
  { id: 'ca-w-28', situation: 'caisse', romaji: 'ryoushuusho', french: 'facture officielle' },
  { id: 'ca-w-29', situation: 'caisse', romaji: 'mochikaeri', french: 'à emporter' },

  // Konbini & PIN (6)
  { id: 'ca-w-30', situation: 'caisse', romaji: 'atatame', french: 'chauffer (micro-ondes)' },
  { id: 'ca-w-31', situation: 'caisse', romaji: 'ohashi', french: 'baguettes' },
  { id: 'ca-w-32', situation: 'caisse', romaji: 'supuun', french: 'cuillère' },
  { id: 'ca-w-33', situation: 'caisse', romaji: 'fooku', french: 'fourchette' },
  { id: 'ca-w-34', situation: 'caisse', romaji: 'ohitotsu', french: 'un (poli, comptage)' },
  { id: 'ca-w-35', situation: 'caisse', romaji: 'anshou-bangou', french: 'code PIN' },
];
