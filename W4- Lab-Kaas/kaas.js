/*Nicky Devilee
Bol4 applicatieontwikkelaar
Week 4 - JavaScript
opdracht: Lab - Kaas*/

// de variabelen die nodig zijn voor de opdracht en later nodig zijn om de gekozen info op de site te laten zien bij de plattegrond.
var kaas = prompt('Is de kaas geel?');
var gaten;
var schimmels;
var duur;
var steen;
var korst1;
var korst2;

if (kaas == 'ja') {
gaten = prompt('Zitten er gaten in?') } 
		if (gaten == 'ja') {
		duur = prompt('Is de kaas belachelijk duur?') } 
			if (duur == 'ja') {
				document.write("Emmenthaler") } 
			else if (duur == 'nee') {
				document.write("Leerdammer") }
		else if (gaten == 'nee') {
		steen = prompt('Is de kaas hard als steen?') }
			if (steen == 'ja') {
				document.write("Pamigiano Reggiano") } 
			else if (steen == 'nee') {
				document.write("Goudse kaas") }

else if (kaas == 'nee') {
schimmels = prompt('Heeft de kaas blauwe schimmels?') }
		if (schimmels == 'ja') {
		korst2 = prompt('Heeft de kaas een korst?') } 
			if (korst2 == 'ja') {
				document.write("Bleu de Rochbaron") } 
			else if (korst2 == 'nee') {
				document.write("Foume d'Ambert") }
		else if (schimmels == 'nee') {
		korst1 = prompt('Heeft de kaas een korst?') }
			if (korst1 == 'ja') {
				document.write("Camembert") } 
			else if (korst1 == 'nee') {
				document.write("Mozzarella") }

// plattegrond van wat je hebt gekozen die word weergegeven op de site