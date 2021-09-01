exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('languages')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('languages').insert([
				{ trigraph_code: 'ACE', digraph_code: 'AF', name: 'ACHINESE' },
				{ trigraph_code: 'ACH', digraph_code: 'AH', name: 'ACHOLI' },
				{
					trigraph_code: 'ADY',
					digraph_code: 'AG',
					name: 'ADIGEY',
					alternate_name: 'ADYGHE'
				},
				{ trigraph_code: 'AAR', name: 'AFAR' },
				{ trigraph_code: 'AFR', digraph_code: 'AA', name: 'AFRIKAANS' },
				{ trigraph_code: 'AFA', digraph_code: 'TZ', name: 'AFRO-ASIAN' },
				{ trigraph_code: 'AIQ', name: 'AIMAQ' },
				{ trigraph_code: 'AKA', digraph_code: 'FB', name: 'AKAN' },
				{
					trigraph_code: 'KPO',
					digraph_code: 'BC',
					name: 'AKPOSSO',
					alternate_name: 'IKPOSO'
				},
				{ trigraph_code: 'SQI', digraph_code: 'AB', name: 'ALBANIAN' },
				{ trigraph_code: 'ALN', name: 'ALBANIAN-GHEG' },
				{ trigraph_code: 'ALS', name: 'ALBANIAN-TOSK' },
				{ trigraph_code: 'ALE', name: 'ALEUT' },
				{ trigraph_code: 'MYG', digraph_code: 'CR', name: 'AMASHI' },
				{ trigraph_code: 'ASE', digraph_code: 'SI', name: 'AMERICAN SIGN LANGUAGE' },
				{ trigraph_code: 'AMH', digraph_code: 'AC', name: 'AMHARIC' },
				{ trigraph_code: 'APA', name: 'APACHE' },
				{ trigraph_code: 'ARA', digraph_code: 'AZ', name: 'ARABIC' },
				{
					trigraph_code: 'ARB',
					digraph_code: 'AD / QE',
					name: 'ARABIC (MODERN STANDARD)¹',
					alternate_name: 'ARABIC-EASTERN'
				},
				{ trigraph_code: 'ARQ', digraph_code: 'DH', name: 'ARABIC-ALGERIAN' },

				{ trigraph_code: 'ABV', name: 'ARABIC-BAHARNA' },
				{ trigraph_code: 'SHU', name: 'ARABIC-CHADIAN', alternate_name: 'ARABIC-SHUWA' },
				{ trigraph_code: 'QAC', digraph_code: 'AJ', name: 'ARABIC-CLASSICAL' },
				{ trigraph_code: 'ARZ', digraph_code: 'AE', name: 'ARABIC-EGYPTIAN' },
				{ trigraph_code: 'QAG', digraph_code: 'DG', name: 'ARABIC-GULF' },
				{ trigraph_code: 'AYH', name: 'ARABIC-HADRAMI' },
				{
					trigraph_code: 'MEY',
					digraph_code: 'QH',
					name: 'ARABIC-HASSANIYYA',
					alternate_name: 'ARABIC-MAURITANIA'
				},
				{ trigraph_code: 'ACW', name: 'ARABIC-HIJAZI' },
				{ trigraph_code: 'QAI', digraph_code: 'QI', name: 'ARABIC-IRAQI' },
				{ trigraph_code: 'QAJ', digraph_code: 'AK', name: 'ARABIC-JORDANIAN' },
				{ trigraph_code: 'QLB', digraph_code: 'AQ', name: 'ARABIC-LEBANESE' },
				{ trigraph_code: 'QAV', digraph_code: 'QL', name: 'ARABIC-LEVANTINE' },
				{ trigraph_code: 'AYL', digraph_code: 'AL', name: 'ARABIC-LIBYAN' },
				{
					trigraph_code: 'QAM',
					digraph_code: 'AM / QW',
					name: 'ARABIC-MAGHREBI¹',
					alternate_name: 'ARABIC-WESTERN'
				},
				{ trigraph_code: 'ACM', name: 'ARABIC-MESOPOTAMIAN' },
				{ trigraph_code: 'ARY', digraph_code: 'BS', name: 'ARABIC-MOROCCAN' },
				{ trigraph_code: 'ARS', name: 'ARABIC-NAJDI' },
				{ trigraph_code: 'APC', name: 'ARABIC-NORTH LEVANTINE' },
				{ trigraph_code: 'AYN', name: 'ARABIC-SANAANI' },
				{ trigraph_code: 'AEC', name: 'ARABIC-SAIDI' },
				{
					trigraph_code: 'QAS',
					digraph_code: 'AN',
					name: 'ARABIC-SAUDI',
					alternate_name: 'ARABIC-PENINSULA'
				},
				{ trigraph_code: 'AJP', name: 'ARABIC-SOUTH LEVANTINE' },
				{ trigraph_code: 'APD', digraph_code: 'AV', name: 'ARABIC-SUDANESE' },
				{
					trigraph_code: 'PGA',
					name: 'ARABIC-SUDANESE CREOLE',
					alternate_name: 'ARABIC-JUBA'
				},
				{
					trigraph_code: 'ACQ',
					name: 'ARABIC-TAIZZI ADENI',
					alternate_name: 'ARABIC-SOUTHERN YEMENI'
				},
				{ trigraph_code: 'AEB', digraph_code: 'BW', name: 'ARABIC-TUNISIAN' },
				{ trigraph_code: 'QAY', digraph_code: 'AT', name: 'ARABIC-YEMENI' },
				{ trigraph_code: 'SYR', digraph_code: 'AL', name: 'ARAMAIC' },
				{
					trigraph_code: 'HYE',
					digraph_code: 'AR',
					name: 'ARMENIAN',
					alternate_name: 'ARMENIAN-EASTERN'
				},
				{ trigraph_code: 'ART', digraph_code: 'XZ', name: 'ARTIFICIAL' },
				{ trigraph_code: 'ASM', digraph_code: 'AS', name: 'ASSAMESE' },
				{ trigraph_code: 'AII', digraph_code: 'XY', name: 'ASSYRIAN' },
				{ trigraph_code: 'AVA', digraph_code: 'AW', name: 'AVAR' },

				{ trigraph_code: 'AVE', digraph_code: 'XB', name: 'AVESTAN' },
				{ trigraph_code: 'AWA', name: 'AWADHI' },
				{ trigraph_code: 'AYM', digraph_code: 'AY', name: 'AYMARA' },
				{ trigraph_code: 'AZE', digraph_code: 'AX', name: 'AZERBAIJANI' },
				{ trigraph_code: 'AZJ', name: 'AZERBAIJANI-NORTH' },
				{ trigraph_code: 'AZB', name: 'AZERBAIJANI-SOUTH' },
				{ trigraph_code: 'BDQ', digraph_code: 'BB', name: 'BAHNAR' },
				{ trigraph_code: 'BRI', digraph_code: 'BK', name: 'BAKWERI' },
				{ trigraph_code: 'BLE', name: 'BALANTA-KENTOHE' },
				{ trigraph_code: 'BAN', digraph_code: 'BD', name: 'BALINESE' },
				{ trigraph_code: 'BAL', digraph_code: 'BT', name: 'BALOCHI' },
				{ trigraph_code: 'AVA', digraph_code: 'AW', name: 'BALOCHI-EASTERN' },
				{ trigraph_code: 'BCC', name: 'BALOCHI-SOUTHERN', alternate_name: 'MAKRANI' },
				{ trigraph_code: 'BGN', name: 'BALOCHI-WESTERN', alternate_name: 'RAKHSHANI' },
				{ trigraph_code: 'BAT', digraph_code: 'WZ', name: 'BALTIC' },
				{ trigraph_code: 'BAM', name: 'BAMBARA', alternate_name: 'BAMANANKAN' },
				{ trigraph_code: 'BAI', digraph_code: 'BJ', name: 'BAMILIKE' },
				{ trigraph_code: 'LIY', name: 'BANDA-BAMBARI' },
				{ trigraph_code: 'BPD', name: 'BANDA-BANDA' },
				{ trigraph_code: 'BQK', name: 'BANDA-MBRES' },
				{ trigraph_code: 'BJO', name: 'BANDA-MID SOUTHERN' },
				{ trigraph_code: 'BFL', name: 'BANDA-NDELE' },
				{ trigraph_code: 'LNL', name: 'BANDA-SOUTH CENTRAL' },
				{ trigraph_code: 'TOR', name: 'BANDA-TOGBO VARA' },
				{ trigraph_code: 'YAJ', name: 'BANDA-YANGERE' },
				{ trigraph_code: 'BNT', digraph_code: 'BZ', name: 'BANTU' },
				{ trigraph_code: 'BAK', digraph_code: 'BP', name: 'BASHKIR' },
				{ trigraph_code: 'EUS', digraph_code: 'BQ', name: 'BASQUE' },
				{
					trigraph_code: 'BAS',
					digraph_code: 'EC',
					name: 'BASSA (CAMAROONS)',
					alternate_name: 'BASA (CAMEROON)'
				},
				{
					trigraph_code: 'BSQ',
					digraph_code: 'BG',
					name: 'BASSA-KRU',
					alternate_name: 'BASSA'
				},
				{ trigraph_code: 'BTK', digraph_code: 'BF', name: 'BATAK' },
				{ trigraph_code: 'QBA', digraph_code: 'BH', name: 'BAULE' },
				{
					trigraph_code: 'BEJ',
					digraph_code: 'BE',
					name: 'BEJA',
					alternate_name: 'BEDAWI, BEDAWIYET'
				},
				{ trigraph_code: 'BEL', digraph_code: 'BL', name: 'BELORUSSIAN' },
				{ trigraph_code: 'BEM', digraph_code: 'BM', name: 'BEMBA' },
				{ trigraph_code: 'BEN', digraph_code: 'BN', name: 'BENGALI' },
				{ trigraph_code: 'BER', digraph_code: 'BR', name: 'BERBER' },
				{ trigraph_code: 'BTB', name: 'BETI' },
				{ trigraph_code: 'BEL', digraph_code: 'BL', name: 'BHILI' },
				{ trigraph_code: 'BDT', name: 'BHOGOTO' },
				{ trigraph_code: 'BHO', name: 'BHOJPURI' },
				{
					trigraph_code: 'BIK',
					digraph_code: 'CG',
					name: 'BICOL',
					alternate_name: 'BIKOL'
				},
				{ trigraph_code: 'BIH', digraph_code: 'BV', name: 'BIHARI' },
				{ trigraph_code: 'BIN', digraph_code: 'CU', name: 'BINI' },
				{ trigraph_code: 'BLA', name: 'BLACKFOOT' },
				{ trigraph_code: 'BOS', digraph_code: 'QO', name: 'BOSNIAN' },
				{ trigraph_code: 'BRH', name: 'BRAHUI' },
				{ trigraph_code: 'BRE', digraph_code: 'BX', name: 'BRETON' },
				{ trigraph_code: 'QBG', digraph_code: 'CE', name: 'BUGINESE-MAKASSARESE' },
				{ trigraph_code: 'BUL', digraph_code: 'BU', name: 'BULGARIAN' },
				{
					trigraph_code: 'MYA',
					digraph_code: 'BY',
					name: 'BURMESE',
					alternate_name: 'MYANMAR'
				},
				{ trigraph_code: 'BSK', name: 'BURUSHASKI' },
				{ trigraph_code: 'FRC', name: 'CAJUN' },
				{
					trigraph_code: 'KHM',
					digraph_code: 'CA',
					name: 'CAMBODIAN',
					alternate_name: 'KHMER'
				},
				{ trigraph_code: 'CAT', digraph_code: 'CB', name: 'CATALAN' },
				{ trigraph_code: 'CEB', digraph_code: 'VB', name: 'CEBUANO' },
				{ trigraph_code: 'CLD', digraph_code: 'XC', name: 'CHALDEAN' },
				{ trigraph_code: 'CBK', digraph_code: 'HV', name: 'CHAVACANO' },
				{ trigraph_code: 'CHE', digraph_code: 'CK', name: 'CHECHEN' },
				{ trigraph_code: 'CHR', name: 'CHEROKEE' },
				{ trigraph_code: 'CGG', name: 'CHIGA' },
				{ trigraph_code: 'ZHO', digraph_code: 'CZ', name: 'CHINESE' },

				{
					trigraph_code: 'NAN',
					digraph_code: 'YD / CD',
					name: 'CHINESE-AMOY¹',
					alternate_name: 'SHOUTH MIN, TEOCHEW'
				},
				{
					trigraph_code: 'CZH',
					digraph_code: 'CN',
					name: 'CHINESE-ANHWEI',
					alternate_name: 'SHOUTH MIN, TEOCHEW'
				},
				{
					trigraph_code: 'YUE',
					digraph_code: 'CC',
					name: 'CHINESE-CANTONESE',
					alternate_name: 'CHINESE-YUE'
				},
				{ trigraph_code: 'MNP', digraph_code: 'CQ', name: 'CHINESE-FUCHOW' },
				{ trigraph_code: 'QMN', digraph_code: 'CF', name: 'CHINESE-FUKIENESE' },

				{ trigraph_code: 'ENG', digraph_code: 'EN', name: 'ENGLISH' }
			]);
		});
};
