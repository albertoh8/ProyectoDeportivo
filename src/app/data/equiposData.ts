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
    id: "Betis(ESP)",
    nombre: "Real Betis Balompie",
    partidos: [
      {
        idLocal: "Betis(ESP)",
        idVisitante: "Sevilla(ESP)",
        fecha: "16-02-2024",
        goles: [
          {
            idParticipante: "Betis(ESP)",
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
            idParticipante: "Betis(ESP)",
            tipoTarjeta: "AMARILLA",
            minuto: "82",
          }
        ]
      },
    ]
  }
];
