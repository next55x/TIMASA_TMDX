
const { ezra } = require('../fredi/ezra');

ezra({ nomCom: 'quote', categorie: 'Group' }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, verifGroupe, arg } = commandeOptions;
  if (!verifGroupe) {
    repondre('This Command works in groups only🤣');
    return;
  }

  if (!arg[0]) {
    try {
      fetch('https://animechan.xyz/api/random')
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`*E.n.b-MdQuotes*

🎬 Anime: ${quote.anime}
👤 Character: ${quote.character}
💬 Quote: ${quote.quote}

Powered by *GRAYSON*`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  } else {
    const query = arg.join(' ');

    try {
      fetch('https://animechan.xyz/api/random/character?name=' + query)
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`E.n.b-MD

🎬 Anime: ${quote.anime}
👤 Character: ${quote.character}
💬 Quote: ${quote.quote}

Powered by *GRAYSON*`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  }
});
