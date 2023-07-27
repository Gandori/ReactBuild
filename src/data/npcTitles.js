const npcTitles = [
    {
        name: 'Tierfreund',
        ort: 'Wald',
        requirement: 'Tiger 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Jäger',
        ort: 'Wald',
        requirement: 'Tiger 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Reißzahn',
        ort: 'Wald',
        requirement: 'Tiger 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Tiger',
        ort: 'Wald',
        requirement: 'Tiger 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Saurier',
        ort: 'Ebene',
        requirement: 'Pterodactyl 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Prähistorisch',
        ort: 'Ebene',
        requirement: 'Pterodactyl 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Forscher',
        ort: 'Ebene',
        requirement: 'Pterodactyl 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Pterodactyl',
        ort: 'Ebene',
        requirement: 'Pterodactyl 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Pterodactyl-Nemesis',
        ort: 'Ebene',
        requirement: 'Pterodactyl 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Brummig',
        ort: 'Bergweg',
        requirement: 'Bärendieb 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Langfinger',
        ort: 'Bergweg',
        requirement: 'Bärendieb 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Bär',
        ort: 'Bergweg',
        requirement: 'Bärendieb 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Bärendieb',
        ort: 'Bergweg',
        requirement: 'Bärendieb 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Bärendieb-Nemesis',
        ort: 'Bergweg',
        requirement: 'Bärendieb 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Menschenjäger',
        ort: 'Das Verlassene Dorf',
        requirement: 'Dorfbewohner 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Quäler',
        ort: 'Das Verlassene Dorf',
        requirement: 'Dorfbewohner 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Sadist',
        ort: 'Das Verlassene Dorf',
        requirement: 'Dorfbewohner 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Dorfbewohner',
        ort: 'Das Verlassene Dorf',
        requirement: 'Dorfbewohner 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Dorfbewohner-Nemesis',
        ort: 'Das Verlassene Dorf',
        requirement: 'Dorfbewohner 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Schwein',
        ort: 'Das Verlassene Dorf',
        requirement: 'Oger 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Räuber',
        ort: 'Das Verlassene Dorf',
        requirement: 'Oger 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Kidnapper',
        ort: 'Das Verlassene Dorf',
        requirement: 'Oger 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Oger',
        ort: 'Das Verlassene Dorf',
        requirement: 'Oger 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Oger-Nemesis',
        ort: 'Das Verlassene Dorf',
        requirement: 'Oger 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Horn',
        ort: 'Das Verlassene Dorf',
        requirement: 'Stier 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Metzger',
        ort: 'Das Verlassene Dorf',
        requirement: 'Stier 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Torero',
        ort: 'Das Verlassene Dorf',
        requirement: 'Stier 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Stier',
        ort: 'Das Verlassene Dorf',
        requirement: 'Stier 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Stier-Nemesis',
        ort: 'Das Verlassene Dorf',
        requirement: 'Stier 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Niedlich',
        ort: 'Wüste',
        requirement: 'Pool 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Unschuld',
        ort: 'Wüste',
        requirement: 'Pool 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Verwandlung',
        ort: 'Wüste',
        requirement: 'Pool 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Katze',
        ort: 'Wüste',
        requirement: 'Pool 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Katzen-Nemesis',
        ort: 'Wüste',
        requirement: 'Pool 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Jung',
        ort: 'Wüste',
        requirement: 'Wüstenbandit-Yamchu 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Casanova',
        ort: 'Wüste',
        requirement: 'Wüstenbandit-Yamchu 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Playboy',
        ort: 'Wüste',
        requirement: 'Wüstenbandit-Yamchu 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Wüstenbandit',
        ort: 'Wüste',
        requirement: 'Wüstenbandit-Yamchu 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Wüstenbandit-Nemesis',
        ort: 'Wüste',
        requirement: 'Wüstenbandit-Yamchu 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Karotte',
        ort: 'Die Pilzstadt',
        requirement: 'Karottenmonster 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Zauber',
        ort: 'Die Pilzstadt',
        requirement: 'Karottenmonster 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Mond',
        ort: 'Die Pilzstadt',
        requirement: 'Karottenmonster 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Häschen',
        ort: 'Die Pilzstadt',
        requirement: 'Karottenmonster 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Häschen-Nemesis',
        ort: 'Die Pilzstadt',
        requirement: 'Karottenmonster 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Untergebener',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Shu 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Anhänger',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Shu 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Mitläufer',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Shu 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Hund',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Shu 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Hunde-Nemesis',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Shu 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Diener',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Mai 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Helfer',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Mai 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Unterworfene',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Mai 499-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Unterworfener',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Mai 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Handlanger',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Mai 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Handlanger-Nemesis',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Mai 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Klein',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Pilaf 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Komplex',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Pilaf 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Reich',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Pilaf 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Herrscherin',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Pilaf 999-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Herrscher',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Pilaf 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Prinzen-Nemesis',
        ort: 'Prinz Pilafs Schloss',
        requirement: 'Pilaf 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Schuft',
        ort: 'Brown Country',
        requirement: 'Lunch 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Bandit',
        ort: 'Brown Country',
        requirement: 'Lunch 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Schurke',
        ort: 'Brown Country',
        requirement: 'Lunch 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Bad',
        ort: 'Brown Country',
        requirement: 'Lunch 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Diebin-Nemesis',
        ort: 'Brown Country',
        requirement: 'Lunch 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Bowlingkugel',
        ort: 'Trainingsinsel',
        requirement: 'Kid Krillin 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Kid',
        ort: 'Trainingsinsel',
        requirement: 'Kid Krillin 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Glatzkopf',
        ort: 'Trainingsinsel',
        requirement: 'Kid Krillin 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Shaolin',
        ort: 'Trainingsinsel',
        requirement: 'Kid Krillin 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Shaolin-Nemesis',
        ort: 'Trainingsinsel',
        requirement: 'Kid Krillin 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Kiemen',
        ort: 'Trainingsinsel',
        requirement: 'Hai 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Fischschuppe',
        ort: 'Trainingsinsel',
        requirement: 'Hai 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Haiflosse',
        ort: 'Trainingsinsel',
        requirement: 'Hai 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Haizahn',
        ort: 'Trainingsinsel',
        requirement: 'Hai 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Alter Knochen',
        ort: 'Trainingsinsel',
        requirement: 'T-Rex 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Scharfzahn',
        ort: 'Trainingsinsel',
        requirement: 'T-Rex 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Archäologe',
        ort: 'Trainingsinsel',
        requirement: 'T-Rex 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Tyranno',
        ort: 'Trainingsinsel',
        requirement: 'T-Rex 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Widerlich',
        ort: 'Trainingsinsel',
        requirement: 'Bakterian 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Stinkend',
        ort: 'Papayainsel',
        requirement: 'Bakterian 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Gestank',
        ort: 'Papayainsel',
        requirement: 'Bakterian 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Bakterian',
        ort: 'Papayainsel',
        requirement: 'Bakterian 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Gestank-Nemesis',
        ort: 'Papayainsel',
        requirement: 'Bakterian 1000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Frischling',
        ort: 'Papayainsel',
        requirement: 'Startnummer 69 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Start',
        ort: 'Papayainsel',
        requirement: 'Startnummer 69 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Nummer',
        ort: 'Papayainsel',
        requirement: 'Startnummer 69 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Nr.69',
        ort: 'Papayainsel',
        requirement: 'Startnummer 69 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Nr.69-Nemesis',
        ort: 'Papayainsel',
        requirement: 'Startnummer 69 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Berüchtigt',
        ort: 'Papayainsel',
        requirement: 'Gilian 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Stratege',
        ort: 'Papayainsel',
        requirement: 'Gilian 100-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Klaue',
        ort: 'Papayainsel',
        requirement: 'Gilian 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Drache',
        ort: 'Papayainsel',
        requirement: 'Gilian 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: '?',
        ort: 'Papayainsel',
        requirement: 'Gilian 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Turban',
        ort: 'Papayainsel',
        requirement: 'Nam 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Ehrenhaft',
        ort: 'Papayainsel',
        requirement: 'Nam 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Mönch',
        ort: 'Papayainsel',
        requirement: 'Nam 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Buddha',
        ort: 'Papayainsel',
        requirement: 'Nam 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Mönch-Nemesis',
        ort: 'Papayainsel',
        requirement: 'Nam 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Verkleidet',
        ort: 'Papayainsel',
        requirement: 'Jackie Chun 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Schildkröte',
        ort: 'Papayainsel',
        requirement: 'Jackie Chun 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Lehrer',
        ort: 'Papayainsel',
        requirement: 'Jackie Chun 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Meister',
        ort: 'Papayainsel',
        requirement: 'Jackie Chun 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Meister-Nemesis',
        ort: 'Papayainsel',
        requirement: 'Jackie Chun 10000-mal besiegen',
        color: '#383838',
    },
    {
        name: 'Schlagfertig',
        ort: 'Wüsten-Stützpunkt',
        requirement: 'Oberst Silver 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Zweite Chance',
        ort: 'Wüsten-Stützpunkt',
        requirement: 'Oberst Silver 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Silver',
        ort: 'Wüsten-Stützpunkt',
        requirement: 'Oberst Silver 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Armee',
        ort: 'Wüsten-Stützpunkt',
        requirement: 'Oberst Silver 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Infanterist',
        ort: 'Jingledorf',
        requirement: 'RR Soldaten 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Streiter',
        ort: 'Jingledorf',
        requirement: 'RR Soldaten 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Waffennarr',
        ort: 'Jingledorf',
        requirement: 'RR Soldaten 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Soldat',
        ort: 'Jingledorf',
        requirement: 'RR Soldaten 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Android',
        ort: 'Muskelturm',
        requirement: 'Leutnant Metallic 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Terminator',
        ort: 'Muskelturm',
        requirement: 'Leutnant Metallic 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Metallic',
        ort: 'Muskelturm',
        requirement: 'Leutnant Metallic 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Leutnant',
        ort: 'Muskelturm',
        requirement: 'Leutnant Metallic 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Schattenkrieger',
        ort: 'Muskelturm',
        requirement: 'Ninja Lila 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Saboteur',
        ort: 'Muskelturm',
        requirement: 'Ninja Lila 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Lila',
        ort: 'Muskelturm',
        requirement: 'Ninja Lila 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'Ninja',
        ort: 'Muskelturm',
        requirement: 'Ninja Lila 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Geiselnehmer',
        ort: 'Muskelturm',
        requirement: 'General White 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Schwächenfinder',
        ort: 'Muskelturm',
        requirement: 'General White 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'White',
        ort: 'Muskelturm',
        requirement: 'General White 500-mal besiegen',
        color: '#ffbb29',
    },
    {
        name: 'General',
        ort: 'Muskelturm',
        requirement: 'General White 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Boxsack',
        ort: 'Westliche Hauptstadt',
        requirement: 'Straßenboxer 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: '?',
        ort: 'Westliche Hauptstadt',
        requirement: 'Straßenboxer 100-mal besiegen',
        count: 100,
        color: '',
    },
    {
        name: '?',
        ort: 'Westliche Hauptstadt',
        requirement: 'Straßenboxer 500-mal besiegen',
        color: '',
    },
    {
        name: '?',
        ort: 'Westliche Hauptstadt',
        requirement: 'Straßenboxer 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Programmiert',
        ort: 'Piratenhöhle',
        requirement: 'Piraten-Roboter 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Gebaut',
        ort: 'Piratenhöhle',
        requirement: 'Piraten-Roboter 100-mal besiegen',
        color: '',
    },
    {
        name: 'Roboter',
        ort: 'Piratenhöhle',
        requirement: 'Piraten-Roboter 500-mal besiegen',
        color: '',
    },
    {
        name: 'Pirat',
        ort: 'Piratenhöhle',
        requirement: 'Piraten-Roboter 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Meeresbewohner',
        ort: 'Piratenhöhle',
        requirement: 'Octopapa 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Rauch',
        ort: 'Piratenhöhle',
        requirement: 'Octopapa 100-mal besiegen',
        color: '',
    },
    {
        name: 'Tentakel',
        ort: 'Piratenhöhle',
        requirement: 'Octopapa 500-mal besiegen',
        color: '',
    },
    {
        name: 'Oktopus',
        ort: 'Piratenhöhle',
        requirement: 'Octopapa 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Verfolger',
        ort: 'Piratenhöhle',
        requirement: 'General Blue 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Befehlshaber',
        ort: 'Piratenhöhle',
        requirement: 'General Blue 100-mal besiegen',
        color: '',
    },
    {
        name: 'Vorgesetzter',
        ort: 'Piratenhöhle',
        requirement: 'General Blue 500-mal besiegen',
        color: '',
    },
    {
        name: 'Blue',
        ort: 'Piratenhöhle',
        requirement: 'General Blue 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Apparat',
        ort: 'Pinguinhausen',
        requirement: 'Arale 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Robotik',
        ort: 'Pinguinhausen',
        requirement: 'Arale 100-mal besiegen',
        color: '',
    },
    {
        name: 'Mechanisch',
        ort: 'Pinguinhausen',
        requirement: 'Arale 500-mal besiegen',
        color: '',
    },
    {
        name: 'Spaßcharakter',
        ort: 'Pinguinhausen',
        requirement: 'Arale 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Aggressiv',
        ort: 'Quittenwald',
        requirement: 'Oberst Yellow 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Humanoid',
        ort: 'Quittenwald',
        requirement: 'Oberst Yellow 100-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Yellow',
        ort: 'Quittenwald',
        requirement: 'Oberst Yellow 500-mal besiegen',
        color: '',
    },
    {
        name: 'Oberst',
        ort: 'Quittenwald',
        requirement: 'Oberst Yellow 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Schnurrbart',
        ort: 'Quittenwald',
        requirement: 'Tao BaiBai 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Söldner',
        ort: 'Quittenwald',
        requirement: 'Tao BaiBai 100-mal besiegen',
        color: '',
    },
    {
        name: 'Assasine',
        ort: 'Quittenwald',
        requirement: 'Tao BaiBai 500-mal besiegen',
        color: '',
    },
    {
        name: 'Profikiller',
        ort: 'Quittenwald',
        requirement: 'Tao BaiBai 1000-mal besiegen',
        color: '#ff2828',
    },
    {
        name: 'Assistent',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Offizier',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black 100-mal besiegen',
        color: '',
    },
    {
        name: 'Black',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black 500-mal besiegen',
        color: '',
    },
    {
        name: 'Adjutant',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Maschine',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black (Rüstung) 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Metallisch',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black (Rüstung) 100-mal besiegen',
        color: '',
    },
    {
        name: 'Rechte Hand',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black (Rüstung) 500-mal besiegen',
        color: '',
    },
    {
        name: 'Rüstung',
        ort: 'RR-Hauptquartier',
        requirement: 'Adjutant Black (Rüstung) 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Unauffällig',
        ort: 'Uranai Babas Palast',
        requirement: 'Inkognito 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Verschwunden',
        ort: 'Uranai Babas Palast',
        requirement: 'Inkognito 100-mal besiegen',
        color: '',
    },
    {
        name: 'Unsichtbar',
        ort: 'Uranai Babas Palast',
        requirement: 'Inkognito 500-mal besiegen',
        color: '',
    },
    {
        name: 'Ikognito',
        ort: 'Uranai Babas Palast',
        requirement: 'Inkognito 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Blutsauger',
        ort: 'Uranai Babas Palast',
        requirement: 'Dracula 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Vampir',
        ort: 'Uranai Babas Palast',
        requirement: 'Dracula 100-mal besiegen',
        color: '',
    },
    {
        name: 'Gräfin',
        ort: 'Uranai Babas Palast',
        requirement: 'Dracula 499-mal besiegen',
        color: '',
    },
    {
        name: 'Graf',
        ort: 'Uranai Babas Palast',
        requirement: 'Dracula 500-mal besiegen',
        color: '',
    },
    {
        name: 'Dracula',
        ort: 'Uranai Babas Palast',
        requirement: 'Dracula 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Bandage',
        ort: 'Uranai Babas Palast',
        requirement: 'Die Mumie 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Langschläfer',
        ort: 'Uranai Babas Palast',
        requirement: 'Die Mumie 100-mal besiegen',
        color: '',
    },
    {
        name: 'Horror',
        ort: 'Uranai Babas Palast',
        requirement: 'Die Mumie 500-mal besiegen',
        color: '',
    },
    {
        name: 'Mumie',
        ort: 'Uranai Babas Palast',
        requirement: 'Die Mumie 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Forke',
        ort: 'Uranai Babas Palast',
        requirement: 'Akkuman 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Strahler',
        ort: 'Uranai Babas Palast',
        requirement: 'Akkuman 100-mal besiegen',
        color: '',
    },
    {
        name: 'Höllenwesen',
        ort: 'Uranai Babas Palast',
        requirement: 'Akkuman 500-mal besiegen',
        color: '',
    },
    {
        name: 'Teufel',
        ort: 'Uranai Babas Palast',
        requirement: 'Akkuman 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Unbekannt',
        ort: 'Uranai Babas Palast',
        requirement: 'Der maskierte Mann 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Mysteriös',
        ort: 'Uranai Babas Palast',
        requirement: 'Der maskierte Mann 100-mal besiegen',
        color: '',
    },
    {
        name: 'Opa',
        ort: 'Uranai Babas Palast',
        requirement: 'Der maskierte Mann 500-mal besiegen',
        color: '',
    },
    {
        name: 'Maskiert',
        ort: 'Uranai Babas Palast',
        requirement: 'Der maskierte Mann 1000-mal besiegen',
        color: '',
    },
    {
        name: 'Lieferant',
        ort: 'Yajirobis Prärie',
        requirement: 'Yajirobi 10-mal besiegen',
        color: '#ffd858',
    },
    {
        name: 'Katzenliebhaber',
        ort: 'Yajirobis Prärie',
        requirement: 'Yajirobi 100-mal besiegen',
        color: '',
    },
    {
        name: 'Unterstützer',
        ort: 'Yajirobis Prärie',
        requirement: 'Yajirobi 500-mal besiegen',
        color: '',
    },
    {
        name: 'Samurai',
        ort: 'Yajirobis Prärie',
        requirement: 'Yajirobi 1000-mal besiegen',
        color: '',
    },
]

export default npcTitles
