/* Non siete obbligati a stampare i risultati del documento. Consideratelo un BONUS su ogni esercizio

1. Crea una funzione che crea la versione girata di una parola. Chiedi all'utente una parola e mostra la versione girata della parola.

2. Crea una funzione che concatena una lista di stringhe. Chiedi all'utente quante stringhe vuole concatenare e poi mostragli il risultato.

3. Crea una funzione che calcola il doppio di un numero. Quindi chiedi all'utente 10 numeri. Per ogni numero, mostra all'utente il doppio, usando la funzione.

4. Crea una funzione che transforma una stringa in maiuscolo o minuscolo in base ad un parametro. Quindi, crea un array che contiene tutte le lettere dell'alfabeto, ciascuna randomicamente maiuscola o minuscola.
Consiglio: potete creare la stringa 'abcdefghijklmnopqrstuvz' e con un ciclo for controllare ogni carattere della stringa, ovvero ogni lettera dell'alfabeto.

5. Crea una funzione che esegue il lancio di una moneta (ritorna testa o croce, casualmente). Quindi, chiedi all'utente quanti lanci vuole effettuare e se punta su testa o croce.
Se la maggioranza dei lanci sono uguali a ciò che ha puntato l'utente, mostragli che ha vinto. Altrimenti, mostragli che ha perso.

6. Crea una funzione che genera il lancio di un dado a 6 facce (ritorna un numero casuale tra 1 e 6). Quindi simula un lancio per il computer e un lancio per l'utente. Mostra all'utente quanto è stato il risultato del computer e quanto è stato il risultato dell'utente e comunicagli se ha vinto o meno.

7. Crea una funzione che simula un lancio della roulette (deve ritornare un numero casuale tra 0 e 36).
Quindi chiedi all'utente se vuole puntare su un numero o su pari/dispari. Quindi esegui un lancio della roulette e fagli sapere se ha vinto.

8. Il casinò:
Chiedi all'utente a quale gioco vuole giocare tra lancio della moneta, lancio dei dadi e roulette. Quindi esegui una delle funzioni che avevi già preparato per i precedenti esercizi.

9. Crea una lista di animali (stringhe) che fanno parte dello Zoo. Crea una funzione che a partire da una stringa, ci fa sapere se nello zoo c'è quell'animale. Chiedi all'utente quale animale vuole vedere. Comunicagli, usando la funzione, se l'animale c'è o meno.
BONUS: la funzione deve funzionare anche se l'utente scrive il nome tutto maiuscolo/tutto maiuscolo/un mix. Ci interessa solo che il nome dell'animale sia lo stesso.

10. Crea una funzione che ordina una lista di numeri dal più piccolo al più grande. Chiedi all'utente quanti numeri vuole inserire. Quindi, chiedi all'utente i numeri. Mostra all'utente la lista di numeri ordinata dal più piccolo al più grande.

11. Crea una funzione che ordina una lista di numeri. In base a uno dei parametri, viene ordinata dal più piccolo al più grande o viceversa. Chiedi all'utente quanti numeri vuole inserire. Quindi, chiedi all'utente i numeri. Infine, chiedi all'utente se li vuole visualizzare in ordine crescente o decrescente. Mostra all'utente la lista di numeri ordinata nel modo in cui ha chiesto.

Buon weekend, buone vacanzine e buon ripasso 💪🏻 

P.S.: la registrazione della lezione è già online */

/*

1. Crea una funzione che crea la versione girata di una parola.Chiedi all'utente una parola e mostra la versione girata della parola.
*/
function giraParola(x) {
    let parolaGirata = "";
    for (let i = x.length - 1; i >= 0; i--) {
        parolaGirata += x[i];
    }
    return parolaGirata;

}
const parolaUtente = prompt("Scrivi la parola che vuoi girare");
const risultato = giraParola(parolaUtente)
console.log(risultato);

