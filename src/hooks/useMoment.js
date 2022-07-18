import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
export const useMoment = (time) => {
    const _moment=moment(time);
    if(_moment.subtract(1,'hours').hours()<=1){
        return _moment.fromNow();
    }
    if(_moment.subtract(1,'days').days()<=1){
        return _moment.format('HH:mm');
    }
}