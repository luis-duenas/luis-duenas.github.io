Algoritmo Ejemplo3
	//definiendo varaibles
	definir pre, sbt, igv, tot como real;
	definir can como entero;
	//inicializando variables
	pre=0; sbt=0; igv=0;  tot=0;
	//capturando valores
	escribir "Ingrese el precio del producto:";
	leer pre;
	escribir "Ingrese la cantidad a comprar del producto:";
	leer can;
	//realizando operaciones
	sbt=pre*can;
	igv=sbt*0.18;
	tot=sbt+igv;
	//mostrando resultados
	escribir "El subtotal es:" ,sbt;
	escribir "El igv es:" ,igv;
	escribir "El total es:" ,tot;
FinAlgoritmo
