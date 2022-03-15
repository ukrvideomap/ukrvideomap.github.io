function getRussian(s) {
	var words = [
		['Fighting', 'Бои'],
        ['Fatalities', 'Трупы'],
        ['Anti-aircraft',  'ПВО'],
        ['Bombardment',  'Бомбы'],
        ['Troop movement, Russia',  'Действие войск РФ'],
        ['Troop movement, Ukraine',  'Действие войск ВСУ'],
        ['Troop movement, LNR',  'Действие войск ЛНР'],
        ['Troop movement, DNR',  'Действие войск ДНР'],
        ['Surrender (Russia)',  'Сдача (РФ)'],
        ['Surrender (Ukraine)',  'Сдача (Украина)'],
        ['Aircraft',  'Авиация'],
        ['Destroyed equipment',  'Утраченная техника'],
        ['Troop movement, Ukraine',  'Действие войск Украины'],
        ['Bridge destroyed',  'Мост уничтожен'],
        ['Friendly fire (Ukraine)',  'Огонь по своим'],
        ['Fire',  'Пожар'],
        ['Shelter-in-place',  'Бомбоубежище'],
        ['Siren',  'Тревога'],
        ['Ship scuttled',  'Корабль затоплен'],
        ['Situation report',  'Обзор ситуации'],
        ['Gathering',  'Собрание'],
        ['Quiet',  'Тишина'],
        ['Other',  'Видео'],
        [' at ',  ' в ']
	]
	for (var i = 0; i < words.length; i++) {
		s = s.replaceAll(words[i][0], words[i][1]);
	}
	return s
}