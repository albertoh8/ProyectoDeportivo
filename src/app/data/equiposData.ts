import { Partido } from "./partidosData";

export interface Equipo {
  id: string,
  nombre: string,
  partidos: Partido[];
}

export const equipos_data: Equipo[] = [
  {
    id: "RMADRID(ESP)",
    nombre: "Real Madrid",
    partidos: [
      {
        idLocal: "RMADRID(ESP)",
        idVisitante: "RSOCIEDAD(ESP)",
        fecha: "16-02-2024",
        goles: [
          {
            idParticipante: "RMADRID(ESP)",
            minuto: "36",
          },
          {
            idParticipante: "RMADRID(ESP)",
            minuto: "56",
          }
        ],
        tarjetas: [
          {
            idParticipante: "RMADRID(ESP)",
            tipoTarjeta: "AMARILLA",
            minuto: "74",
          },
          {
            idParticipante: "RSOCIEDAD(ESP)",
            tipoTarjeta: "AMARILLA",
            minuto: "82",
          }
        ]
      },
    ]
  },
  {
    id: "BETIS(ESP)",
    nombre: "Real Betis Balompie",
    partidos: [
      {
        idLocal: "BETIS(ESP)",
        idVisitante: "Sevilla(ESP)",
        fecha: "16-02-2024",
        goles: [
          {
            idParticipante: "BETIS(ESP)",
            minuto: "36",
          },
          {
            idParticipante: "Sevilla(ESP)",
            minuto: "56",
          }
        ],
        tarjetas: [
          {
            idParticipante: "Sevilla(ESP)",
            tipoTarjeta: "AMARILLA",
            minuto: "74",
          },
          {
            idParticipante: "BETIS(ESP)",
            tipoTarjeta: "AMARILLA",
            minuto: "82",
          }
        ]
      },
    ]
  },
  {
    id: "GIR(ESP)",
    nombre: "Girona",
    partidos: [
      {
        idLocal: "GIR(ESP)",
        idVisitante: "GET(ESP)",
        fecha: "19-02-2024",
        goles: [
          {
            idParticipante: "GIR(ESP)",
            minuto: "53",
          },
        ],
        tarjetas: [
          {
            idParticipante: "GET(ESP)",
            tipoTarjeta: "ROJA",
            minuto: "82",
          }
        ]
      },
    ]
  },
  {
    id: "ALM(ESP)",
    nombre: "ALMERIA",
    partidos: [
      {
        idLocal: "ALM(ESP)",
        idVisitante: "RSOC(ESP)",
        fecha: "22-02-2024",
        goles: [
          {
            idParticipante: "RSOC(ESP)",
            minuto: "53",
          },
        ],
        tarjetas: [
          {
            idParticipante: "ALM(ESP)",
            tipoTarjeta: "AMAIRLLA",
            minuto: "32",
          }
        ]
      },
    ]
  },
];
