import { Partido } from "./partidosData";

export interface Equipo {
  id: string,
  nombre: string,
  partidos: Partido[];
}

export const equipos_data: Equipo[] = [
  {
    id: "RMADRID",
    nombre: "Real Madrid",
    partidos: [
      {
        idLocal: "RMADRID",
        idVisitante: "RSOCIEDAD",
        fecha: "16-02-2024",
        goles: [
          {
            idParticipante: "RMADRID",
            minuto: "36",
          },
          {
            idParticipante: "RMADRID",
            minuto: "56",
          }
        ],
        tarjetas: [
          {
            idParticipante: "RMADRID",
            tipoTarjeta: "AMARILLA",
            minuto: "74",
          },
          {
            idParticipante: "RSOCIEDAD",
            tipoTarjeta: "AMARILLA",
            minuto: "82",
          }
        ]
      },
    ]
  },
  {
    id: "BETIS",
    nombre: "Real Betis Balompie",
    partidos: [
      {
        idLocal: "BETIS",
        idVisitante: "Sevilla",
        fecha: "16-02-2024",
        goles: [
          {
            idParticipante: "BETIS",
            minuto: "36",
          },
          {
            idParticipante: "Sevilla",
            minuto: "56",
          }
        ],
        tarjetas: [
          {
            idParticipante: "Sevilla",
            tipoTarjeta: "AMARILLA",
            minuto: "74",
          },
          {
            idParticipante: "BETIS",
            tipoTarjeta: "AMARILLA",
            minuto: "82",
          }
        ]
      },
    ]
  },
  {
    id: "GIR",
    nombre: "Girona",
    partidos: [
      {
        idLocal: "GIR",
        idVisitante: "GET",
        fecha: "19-02-2024",
        goles: [
          {
            idParticipante: "GIR",
            minuto: "53",
          },
        ],
        tarjetas: [
          {
            idParticipante: "GET",
            tipoTarjeta: "ROJA",
            minuto: "82",
          }
        ]
      },
    ]
  },
  {
    id: "ALM",
    nombre: "ALMERIA",
    partidos: [
      {
        idLocal: "ALM",
        idVisitante: "RSOC",
        fecha: "22-02-2024",
        goles: [
          {
            idParticipante: "RSOC",
            minuto: "53",
          },
        ],
        tarjetas: [
          {
            idParticipante: "ALM",
            tipoTarjeta: "AMAIRLLA",
            minuto: "32",
          }
        ]
      },
    ]
  },
  {
    id: "GRAN",
    nombre: "GRANADA",
    partidos: [
      {
        idLocal: "GRAN",
        idVisitante: "HUELV",
        fecha: "22-02-2024",
        goles: [
          {
            idParticipante: "GRAN",
            minuto: "53",
          },
        ],
        tarjetas: [
          {
            idParticipante: "HUELV",
            tipoTarjeta: "AMAIRLLA",
            minuto: "32",
          }
        ]
      },
    ]
  },
];
