<template>
	<base-converter>
		<div class="first__converter">
			<select v-model="firstSelectedTicker" @click="inputDisplayControl">
				<option disabled>Выберите валюту</option>
				<option
				selected="selected"
				v-for="ticker in tickerList"
				:key="ticker.ID"
				:charCode="ticker.CharCode">
				{{ ticker.CharCode }}
				</option>
			</select>
			<converter-item
				v-for="ticker in infoFirstConverter.firstArrayConverter"
				:key="ticker.ID"
				:name="ticker.Name">
			</converter-item>

			<input
				type="number"
				min="0"
				v-model="converterValueUser"
				:class="{ isDisplayBlock }"
				placeholder="Введите значение"
			/>
		</div>

		<button @click="swapConverterValue">Меняет местами</button>

		<div class="last__converter">
			<select v-model="secondSelectedTicker">
				<option disabled>Выберите валюту</option>
				<option
					v-for="ticker in tickerList"
					:key="ticker.ID"
					:charCode="ticker.CharCode"
				>
					{{ ticker.CharCode }}
				</option>
			</select>
			<converter-item
				v-for="ticker in infoSecondConverter.secondArrayConverter"
				:key="ticker.ID"
				:name="ticker.Name"
				:value="calcConvertibleCurrency()"
			>
			</converter-item>
		</div>
	</base-converter>
</template>

<script>
	import BaseConverter from '../Base/BaseConverter.vue';
	import ConverterItem from '../components/ConverterItem.vue';

	export default {
		components: {
			BaseConverter,
			ConverterItem,
		},
		data() {
			return {
				firstSelectedTicker: '',
				infoFirstConverter: {
					valueFirst: '',
					firstNominalConverter: '',
					firstArrayConverter: [],
					isDisplayInput: null,
				},

				secondSelectedTicker: '',
				infoSecondConverter: {
					valueLast: '',
					secondNomanilConveter: '',
					secondArrayConverter: [],
				},

				converterValueUser: '',		
			};
		},
		methods: {
			calcConvertibleCurrency() {				
				const { valueFirst, firstNominalConverter } = this.infoFirstConverter;
				const { valueLast, secondNomanilConveter } = this.infoSecondConverter;
				
				let conversionResult = (this.converterValueUser * firstNominalConverter * valueLast ) / 
					(secondNomanilConveter * valueFirst);

				return conversionResult.toFixed(2);				
			},
			swapConverterValue() {
				const temporaryValueFirstConveter = this.infoFirstConverter.firstArrayConverter;
				const temporaryValueSecondConveter = this.infoSecondConverter.secondArrayConverter;
				this.infoFirstConverter.firstArrayConverter = temporaryValueSecondConveter;
				this.infoSecondConverter.secondArrayConverter = temporaryValueFirstConveter;

				const temporaryValueFirstTicker = this.firstSelectedTicker;
				const temporaryValueSecondTicker = this.secondSelectedTicker;
				this.firstSelectedTicker = temporaryValueSecondTicker;
				this.secondSelectedTicker = temporaryValueFirstTicker;
			},
			inputDisplayControl() {
				if (!this.firstSelectedTicker == '') {
				this.infoFirstConverter.isDisplayInput = true;
				}
			},
		},
		computed: {
			tickerList() {
				return this.$store.state.tickerList;
			},
			isDisplayBlock() {
				return this.infoFirstConverter.isDisplayInput == true;
			},
		},
		created() {
			this.$store.dispatch('getTickers');
		},
		watch: {
			firstSelectedTicker() {						
				this.infoFirstConverter.firstArrayConverter = this.tickerList.filter(
				(tic) => tic.CharCode == this.firstSelectedTicker);				

				for (let item of this.infoFirstConverter.firstArrayConverter) {
				let parValueCurrency = item.Nominal;
				let valueSelectedCurrency = item.Value;
				const rateInRubles = 1000 / (valueSelectedCurrency / parValueCurrency);
				const amountCurrencyOfConversion = (rateInRubles * parValueCurrency) / 1000;

				return (this.infoFirstConverter.valueFirst = amountCurrencyOfConversion), 
				(this.infoFirstConverter.firstNominalConverter = parValueCurrency);
				}
			},
			secondSelectedTicker() {
				this.infoSecondConverter.secondArrayConverter = this.tickerList.filter(
				(tic) => tic.CharCode == this.secondSelectedTicker);

				for (let item of this.infoSecondConverter.secondArrayConverter) {
				let parValueCurrency = item.Nominal;
				let valueSelectedCurrency = item.Value;
				const rateInRubles = 1000 / (valueSelectedCurrency / parValueCurrency);
				const amountCurrencyOfConversion = (rateInRubles * parValueCurrency) / 1000;

				return (this.infoSecondConverter.valueLast = amountCurrencyOfConversion),
				(this.infoSecondConverter.secondNomanilConveter = parValueCurrency);
				}
			},
		},
	};
</script>

<style scoped>
	select {
		width: 60px;
	}

	div {
		display: flex;
		justify-content: center;		
	}

	.first__converter {
		margin: 15px;
		border: 1px solid #333;
		margin: 0 auto;
		padding: 5px;
		flex: 0 0 40%;
	}

	.last__converter {
		margin: 15px;
		border: 1px solid #333;
		margin: 0 auto;
		padding: 5px;
		flex: 0 0 40%;
		
	}

	input {
		display: none;
		text-align: center;
		border-bottom: 1px solid #333;
	}

	.isDisplayBlock {
		display: block;
	}

	button {
		cursor: pointer;
		margin: 0 auto;
	}
	
	button:hover {
		box-shadow: 0px 5px 10px 2px rgba(22, 93, 148, 0.45);
	}

	select {
		cursor: pointer;
	}

	@media (max-width: 992px) {
		button {
			width: 74px;
			margin: 10px auto;
		}

		.first__converter {
			width: 370px;
			align-items: center;
		}

		.last__converter {
			width: 370px;
			align-items: center;
		}

		input {
			padding: 5px;
		}
	}

	@media (max-width: 576px) {
		.first__converter {
			flex-direction: column;
			width: 260px;
		}

		.last__converter {
			flex-direction: column;
			width: 260px;
		}
	}
</style>