export interface Partido {
  idLocal: string;
  idVisitante: string;
  fecha: string;
  goles?: Gol[];
  tarjetas?: Tarjeta[];
}

export interface Gol {
  idParticipante: string;
  minuto: string;
}

export interface Tarjeta {
  idParticipante: string;
  tipoTarjeta: string;
  minuto: string;
}

export const partidos_data: Partido[] = [
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
  {
    idLocal: "FCBAR(ESP)",
    idVisitante: "ATHBILB(ESP)",
    fecha: "17-02-2024",
    goles: [
      {
        idParticipante: "FCBAR(ESP)",
        minuto: "14",
      },
      {
        idParticipante: "ATHBILB(ESP)",
        minuto: "25",
      },
      {
        idParticipante: "ATHBILB(ESP)",
        minuto: "72",
      }
    ],
    tarjetas: [
      {
        idParticipante: "FCBAR(ESP)",
        tipoTarjeta: "AMARILLA",
        minuto: "23",
      },
      {
        idParticipante: "FCBAR(ESP)",
        tipoTarjeta: "AMARILLA",
        minuto: "47",
      }
    ]
  },
];
