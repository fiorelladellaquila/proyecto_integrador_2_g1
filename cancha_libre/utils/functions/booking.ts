import moment from 'moment';

export const isCourtBooked = (date: any, time: string, courtId: number, soccerFieldsData: any) => {
    const formattedDate = moment(date).format("YYYY-MM-DD");
  
    // Verificar si hay una reserva para la fecha, cancha y hora específicos
    return soccerFieldsData.some((field: any) =>
      field.shifts.some((shift: any) =>
        moment(shift.date_time).format("YYYY-MM-DD") === formattedDate &&
        shift.soccer_field_id === courtId &&
        moment(shift.date_time).format("HH") === time
      )
    );
  };