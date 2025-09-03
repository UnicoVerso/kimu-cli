# kimu create

Crea un nuovo progetto KIMU in una nuova cartella.

## Sintassi
```bash
kimu create <nome-progetto> [--no-install] [--git] [--force]
```

## Opzioni
- `<nome-progetto>`: nome della cartella da creare
- `--no-install`: salta l'installazione delle dipendenze
- `--git`: inizializza un repository git
- `--force`: sovrascrive la cartella se già esistente

## Esempio
```bash
kimu create my-app --git
```

## Note
Il comando crea una cartella con README base. Altre funzionalità verranno aggiunte.
