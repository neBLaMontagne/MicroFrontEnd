// vitest.config.js

export default {
    // Spécifiez les fichiers de test que vous souhaitez exécuter.
    // Utilisez des wildcards pour inclure plusieurs fichiers.
    testFiles: ['**/*.test.js'],
  
    // Choisissez le reporter pour afficher les résultats des tests.
    // Les options disponibles sont 'dot', 'list', 'min', 'spec', 'tap' ou 'xunit'.
    // Par défaut, le reporter 'dot' est utilisé.
    reporter: 'dot',
  
    // Timeout global pour les tests, en millisecondes.
    // Si un test prend plus de temps que ce timeout, il est considéré comme échoué.
    // Par défaut, le timeout est de 5000 ms (5 secondes).
    timeout: 5000,
  
    // Options de l'assertion.
    // Permet d'activer ou de désactiver certaines fonctionnalités de l'assertion.
    assertOptions: {
      // Active le mode strict pour les assertions.
      // En mode strict, une assertion échouera si elle échoue partiellement.
      // Par défaut, le mode strict est désactivé.
      strict: true,
  
      // Active l'affichage détaillé des erreurs d'assertion.
      // Si activé, l'erreur affichera des informations détaillées sur l'assertion qui a échoué.
      // Par défaut, l'affichage détaillé est désactivé.
      verbose: true,
    },
  
    // Options du navigateur virtuel (JSDOM).
    // Ces options permettent de configurer le comportement de JSDOM lors de l'exécution des tests.
    jsdomOptions: {
      // Largeur de la fenêtre du navigateur virtuel.
      // Par défaut, la largeur est de 1024 pixels.
      width: 1024,
  
      // Hauteur de la fenêtre du navigateur virtuel.
      // Par défaut, la hauteur est de 768 pixels.
      height: 768,
  
      // URL de base pour le navigateur virtuel.
      // Par défaut, aucune URL de base n'est spécifiée.
      url: 'http://localhost:3000',
  
      // Si défini sur true, les erreurs non capturées dans le code des tests seront affichées.
      // Par défaut, les erreurs non capturées sont affichées.
      showDebugOutput: true,
    },
  
    // Liste des plugins à utiliser pour personnaliser le comportement de Vitest.
    // Les plugins peuvent être utilisés pour étendre ou modifier les fonctionnalités de Vitest.
    plugins: [
      // Exemple de plugin :
      // require('vitest-plugin-custom')(),
    ],
  
    // Options spécifiques au réseau pour l'exécution des tests.
    networkOptions: {
      // Adresse IP ou hôte du serveur de test à utiliser pour l'exécution des tests.
      // Par défaut, localhost est utilisé.
      serverAddress: 'localhost',
  
      // Port du serveur de test à utiliser pour l'exécution des tests.
      // Par défaut, le port 8080 est utilisé.
      serverPort: 8080,
    },
  
    // Autres options de configuration spécifiques à Vitest.
    // Ajoutez ici d'autres options de configuration spécifiques à votre projet.
  };
  