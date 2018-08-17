import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .init({
        // we init with resources
        resources: {
            en: {
                translations: {
                    // App.js
                    "error_noRequestID": "Error : this request is invalid or has expired. <br/>Please try again to get a valid link by texting COMPASSION to 959. This service is free of charge. Thank you!",
                    "error_noService": "Error : the service is not available at this time. <br/>Please try again in a few minutes. Thank you!",
                    "error_sponsorshipAlreadyMade": "You already sponsored this child, thank you! <br/><br/> If you want to sponsor another child, please text again COMPASSION to 959. This service is free of charge.",
                    "error_refresh": "Refresh page",
                    "error_sponsorFromWebsite": "Sponsor a child from our website",
                    "error_websiteUrl": "https://www.compassion.ch/parrainer",
                    "waitingForChild": "we are looking for a child waiting for a sponsor, please wait a few seconds...",
                    "waitingForOtherChild": "we are looking for a child matching your request, please wait a few seconds...",
                    "ageYears": " years",
                    // ChildCard.js
                    "cardTitle": "Sponsor a child",
                    "age": "Age",
                    "gender": "Gender",
                    "country": "Country",
                    "Male": "Male",
                    "Female": "Female",
                    // ChildDetails.js
                    "more": "More details",
                    // SponsorForm.js
                    "coordinates": "Your coordinates",
                    "firstname": "Firstname",
                    "lastname": "Lastname",
                    "email": "Email",
                    "emailConfirm": "Confirm your email address",
                    "sponsorshipPlus": "Sponsorship plus",
                    "otherChild": "Other child",
                    "sponsorNow": "Sponsor {{name}}",
                    "error_invalidMail": "Please verify that you put a valid e-mail address.",
                    "error_missingFirstname": "Please enter your first name",
                    "error_missingLastname": "Please enter your last name",
                    // ModalForm.js
                    "chooseTitle": "Choose another child",
                    "modalHelp": "Select filters for another child. You can leave the filters empty if you don't want to choose on given criteria.",
                    "genderSelect": "Boy/Girl",
                    "ageSelect": "Age",
                    "countrySelect": "Country",
                    "cancel": "Cancel",
                    "boy": "Boy",
                    "girl": "Girl",
                    "ageCat1": "0-3 years",
                    "ageCat2": "4-6 years",
                    "ageCat3": "7-10 years",
                    "ageCat4": "11-14 years",
                    "ageCat5": "15-20 years",
                    // SponsorshipPlusTabs.js
                    "basicTab": "Sponsorship basic",
                    "basicTitle": "CHF 42.- / month",
                    "basicDescription": "Your monthly support provides life-changing opportunities such as " +
                        "an opportunity to attend or stay in school, " +
                        "medical care, nourishing food, mentoring, and a safe environment.",
                    "plusTab": "Sponsorship plus",
                    "plusTitle": "CHF 50.- / month",
                    "plusDescription": "Sponsorship Plus is the basic sponsorship " +
                        "plus an additional donation of CHF 8.00 per month: <br/><br/>it enables Compassion to finance " +
                        "projects to change the children's environment. " +
                        "The funds received under the Sponsorship Plus program contribute to a common fund " +
                        "and enable Compassion to support several projects each year.",
                    "sponsorshipPromotion": "Compassion child sponsorship works! Millions of children have “graduated” from our program and are now responsible, fulfilled adults.",
                    // SuccessMessage.js
                    "successTitle": "You sponsored {{preferred_name}}",
                    "successMessage1": "Hooray! {{preferred_name}} will soon receive the good news that you are his sponsor.",
                    "successMessage2": "There a few more steps required to confirm the sponsorship, but no worries: you will receive all the details per e-mail so that you can complete your registration when you have time.",
                }
            },
            fr: {
                translations: {
                    // App.js
                    "error_noRequestID": "Erreur : requête invalide ou expirée. <br/>Pour recevoir un nouveau lien valide, merci d'envoyer COMPASSION par SMS au 959. Ce SMS est gratuit.",
                    "error_noService": "Erreur : le service n'est pas disponible pour le moment. <br/>Veuillez essayer dans quelques minutes. Merci !",
                    "error_sponsorshipAlreadyMade": "Vous avez déjà parrainé cet enfant ! <br/><br/> Si vous souhaitez parrainer un autre enfant, merci d'envoyer COMPASSION par SMS au 959. Ce SMS est gratuit.",
                    "error_refresh": "Recharger la page",
                    "error_sponsorFromWebsite": "Parrainer un enfant depuis le site web",
                    "error_websiteUrl": "https://www.compassion.ch/parrainer",
                    "waitingForChild": "Merci de patienter quelques secondes pendant que nous recherchons un enfant en attente d'un parrain...",
                    "waitingForOtherChild": "Nous recherchons un enfant qui correspond à vos critères. Merci de patienter quelques secondes...",
                    "ageYears": " ans",
                    // ChildCard.js
                    "cardTitle": "Parrainer un enfant",
                    "age": "Age",
                    "gender": "Sexe",
                    "country": "Pays",
                    "Male": "Garçon",
                    "Female": "Fille",
                    // ChildDetails.js
                    "more": "Plus d'informations",
                    // SponsorForm.js
                    "coordinates": "Vos coordonnées",
                    "firstname": "Prénom",
                    "lastname": "Nom",
                    "email": "Email",
                    "emailConfirm": "Confirmez votre addresse e-mail",
                    "sponsorshipPlus": "Parrainage plus",
                    "otherChild": "Choisir un autre enfant",
                    "sponsorNow": "Parrainer {{name}}",
                    "error_invalidMail": "Merci de vérifier la validité de votre adresse e-mail",
                    "error_missingFirstname": "Veuillez renseigner votre prénom",
                    "error_missingLastname": "Veuillez renseigner votre nom de famille",
                    // ModalForm.js
                    "chooseTitle": "Choisir un autre enfant",
                    "modalHelp": "Vous pouvez spécifier ici quelques critères de recherche. Laissez-les simplement vides si vous ne souhaitez pas choisir vous-même.",
                    "genderSelect": "Garçon/Fille",
                    "ageSelect": "Tranche d'âge",
                    "countrySelect": "Pays",
                    "cancel": "Annuler",
                    "boy": "Garçon",
                    "girl": "Fille",
                    "ageCat1": "0-3 ans",
                    "ageCat2": "4-6 ans",
                    "ageCat3": "7-10 ans",
                    "ageCat4": "11-14 ans",
                    "ageCat5": "15-20 ans",
                    // SponsorshipPlusTabs.js
                    "basicTab": "Parrainage standard",
                    "basicTitle": "CHF 42.- / mois",
                    "basicDescription": "Votre soutien mensuel offre à l’enfant l’accès à la scolarité, un suivi médical, une alimentation nourrissante, des formations à l’hygiène, et des activités qui lui permettront de prendre conscience de sa valeur et de son potentiel. Le tout, dans un environnement sécurisé et bienveillant.",
                    "plusTab": "Parrainage plus",
                    "plusTitle": "CHF 50.- / mois",
                    "plusDescription": "Avec CHF 8.- de plus par mois, le Parrainage Plus permet en plus du Parrainage Standard de financer des projets pour changer l'environnement des enfants et pour soutenir les enfants en attente d’un parrain.",
                    "sponsorshipPromotion": "Le parrainage d'enfants de Compassion a prouvé son efficacité ! Des millions d'enfants démunis ont pu être libérés de la pauvreté et sont maintenant des adultes responsables.",
                    // SuccessMessage.js
                    "successTitle": "Vous avez parrainé {{preferred_name}}",
                    "successMessage1": "Félicitations ! {{preferred_name}} sera heureux d'apprendre que vous êtes désormais son parrain.",
                    "successMessage2": "Il reste 2 étapes pour débuter votre parrainage, mais soyez tranquille : vous recevrez les instructions nécessaires par e-mail. Vous pourrez ainsi compléter les informations manquantes dès que vous avez un petit moment. D'avance merci !",
                }
            },
            de: {
                translations: {
                    // App.js
                    "error_noRequestID": "Fehler: Diese Anfrage ist ungültig. <br/> Bitte versuche es erneut: um einen gültigen Link zu erhalten, sende COMPASSION an 959. Danke!",
                    "error_sponsorshipAlreadyMade": "Du bist bereits Pate/Patin von diesem Kind. Danke! <br/><br/>Wenn du ein weiteres Kind unterstützen möchten, sende bitte erneut COMPASSION an 959.",
                    "error_noService": "Fehler : Der Dienst ist zu diesem Zeitpunkt nicht verfügbar. <br/>Bitte versuche es in ein paar Minuten noch einmal. Vielen Dank!",
                    "error_refresh": "Refresh page",
                    "error_sponsorFromWebsite": "Parrainer un enfant depuis le site web",
                    "error_websiteUrl": "https://www.compassion.ch/de/finden-sie-ein-patenkind/",
                    "waitingForChild": "Bitte warte ein paar Sekunden, wir suchen ein Kind, das auf einen Paten wartet ...",
                    "waitingForOtherChild": "Wir suchen ein Kind, das deinen Kriterien entspricht, bitte warte ein paar Sekunden ...",
                    "ageYears": " Jahre",
                    // ChildCard.js
                    "cardTitle": "Ein Kind unterstützen",
                    "age": "Alter",
                    "gender": "Geschlecht",
                    "country": "Land",
                    "Male": "Männlich",
                    "Female": "Weiblich",
                    // ChildDetails.js
                    "more": "Weitere Informationen",
                    // SponsorForm.js
                    "coordinates": "Deine Koordinaten",
                    "firstname": "Vorname",
                    "lastname": "Nachname",
                    "email": "E-Mail",
                    "emailConfirm": "Confirm your email address",
                    "sponsorshipPlus": "Patenschaft Plus",
                    "otherChild": "Ein anderes Kind unterstützen",
                    "sponsorNow": "{{name}} unterstützen",
                    "error_invalidMail": "Please verify that you put a valid e-mail address.",
                    "error_missingFirstname": "Please enter your first name",
                    "error_missingLastname": "Please enter your last name",
                    // ModalForm.js
                    "chooseTitle": "Wähle ein anderes Kind",
                    "modalHelp": "Wähle einen Filter für ein anderes Kind aus. Du kannst die Filter leer lassen, wenn du nicht nach bestimmten Kriterien auswählen möchtest.",
                    "genderSelect": "Junge/Mädchen",
                    "ageSelect": "Alter",
                    "countrySelect": "Land",
                    "cancel": "Abbrechen",
                    "boy": "Junge",
                    "girl": "Mädchen",
                    "ageCat1": "0-3 Jahre",
                    "ageCat2": "4-6 Jahre",
                    "ageCat3": "7-10 Jahre",
                    "ageCat4": "11-14 Jahre",
                    "ageCat5": "15-20 Jahre",
                    // SponsorshipPlusTabs.js
                    "basicTab": "Patenschaft Basis",
                    "basicTitle": "CHF 42.- / Monat",
                    "basicDescription": "Deine Patenschaft ermöglicht, dass das Kind ein Kinderzentrum besucht, das von einer einheimischen christlichen Gemeinde geführt wird. Dort wird es ganzheitlich gefördert: Es geht zur Schule, erhält Nahrung und wird ärztlich versorgt. Das Kind lernt, dass es wertvoll ist und entdeckt sein Potential in einem sicheren Umfeld.",
                    "plusTab": "Patenschaft Plus",
                    "plusTitle": "CHF 50.- / Monat",
                    "plusDescription": "Patenschaft \"Plus\" beinhaltet die Patenschaft \"Basis\" von CHF 42.00 und eine Spende von CHF 8.00 pro Monat zusätzlich. Sie erlaubt Compassion, Projekte zu finanzieren um die Umgebung des Patenkindes zu verändern und Kinder zu unterstützen, die noch auf einen Paten warten.",
                    // SuccessMessage.js
                    "successMessage1": "Juhu! {{preferred_name}} wird bald die gute Nachricht erhalten, dass du sein Pate bist.<br/><br/>Es sind noch ein paar Schritte nötig, um die Patenschaft zu bestätigen, aber keine Sorge: Du wirst alle Details per E-Mail erhalten, damit du die Registrierung abschliessen kannst, wenn du Zeit hast.",
                    "successMessage2": "Es sind noch ein paar Schritte nötig, um das Sponsoring zu bestätigen, aber keine Sorge: Sie werden alle Details per E-Mail erhalten, damit Sie Ihre Registrierung abschließen können, wenn Sie Zeit haben.",
                    "successTitle": "You sponsored {{preferred_name}}",
                }
            },
            it: {
                translations: {
                    // App.js
                    "error_noRequestID": "Error : this request is invalid or has expired. <br/>Please try again to get a valid link by texting COMPASSION to 959. This service is free of charge. Thank you!",
                    "error_noService": "Error : the service is not available at this time. <br/>Please try again in a few minutes. Thank you!",
                    "error_sponsorshipAlreadyMade": "You already sponsored this child, thank you! <br/><br/> If you want to sponsor another child, please text again COMPASSION to 959. This service is free of charge.",
                    "error_refresh": "Refresh page",
                    "error_sponsorFromWebsite": "Sponsor a child from our website",
                    "error_websiteUrl": "https://www.compassion.ch/parrainer",
                    "waitingForChild": "we are looking for a child waiting for a sponsor, please wait a few seconds...",
                    "waitingForOtherChild": "we are looking for a child matching your request, please wait a few seconds...",
                    "ageYears": " years",
                    // ChildCard.js
                    "cardTitle": "Sponsor a child",
                    "age": "Age",
                    "gender": "Gender",
                    "country": "Country",
                    "Male": "Male",
                    "Female": "Female",
                    // ChildDetails.js
                    "more": "More details",
                    // SponsorForm.js
                    "coordinates": "Your coordinates",
                    "firstname": "Firstname",
                    "lastname": "Lastname",
                    "email": "Email",
                    "emailConfirm": "Confirm your email address",
                    "sponsorshipPlus": "Sponsorship plus",
                    "otherChild": "Other child",
                    "sponsorNow": "Sponsor {{name}}",
                    "error_invalidMail": "Please verify that you put a valid e-mail address.",
                    "error_missingFirstname": "Please enter your first name",
                    "error_missingLastname": "Please enter your last name",
                    // ModalForm.js
                    "chooseTitle": "Choose another child",
                    "modalHelp": "Select filters for another child. You can leave the filters empty if you don't want to choose on given criteria.",
                    "genderSelect": "Boy/Girl",
                    "ageSelect": "Age",
                    "countrySelect": "Country",
                    "cancel": "Cancel",
                    "boy": "Boy",
                    "girl": "Girl",
                    "ageCat1": "0-3 years",
                    "ageCat2": "4-6 years",
                    "ageCat3": "7-10 years",
                    "ageCat4": "11-14 years",
                    "ageCat5": "15-20 years",
                    // SponsorshipPlusTabs.js
                    "basicTab": "Sponsorship basic",
                    "basicTitle": "CHF 42.- / month",
                    "basicDescription": "Your monthly support provides life-changing opportunities such as " +
                        "an opportunity to attend or stay in school, " +
                        "medical care, nourishing food, mentoring, and a safe environment.",
                    "plusTab": "Sponsorship plus",
                    "plusTitle": "CHF 50.- / month",
                    "plusDescription": "Sponsorship Plus is the basic sponsorship " +
                        "plus an additional donation of CHF 8.00 per month: <br/><br/>it enables Compassion to finance " +
                        "projects to change the children's environment. " +
                        "The funds received under the Sponsorship Plus program contribute to a common fund " +
                        "and enable Compassion to support several projects each year.",
                    "sponsorshipPromotion": "Compassion child sponsorship works! Millions of children have “graduated” from our program and are now responsible, fulfilled adults.",
                    // SuccessMessage.js
                    "successTitle": "You sponsored {{preferred_name}}",
                    "successMessage1": "Hooray! {{preferred_name}} will soon receive the good news that you are his sponsor.",
                    "successMessage2": "There a few more steps required to confirm the sponsorship, but no worries: you will receive all the details per e-mail so that you can complete your registration when you have time.",
                }
            },
        },
        fallbackLng: 'en',
        debug: true,

        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',

        keySeparator: false, // we use content as keys

        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ','
        },

        react: {
            wait: true
        }
    });

export default i18n;