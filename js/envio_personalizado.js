var tipoDestinatario = Ext.create('Ext.data.Store', {
	fields: ['id', 'nome'],
	data: [
		{"id": 1, "nome": "Alunos"},
		{"id": 2, "nome": "Palestrantes"},
		{"id": 3, "nome": "Colaboradores"}
	]
});

Ext.define('UFs', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'estado_id', type: 'int'},
		{name: 'estado_nome', type: 'string'}
	]

});

var ds_uf = Ext.create('Ext.data.Store', {
	storeID: 'UFsStore',
	model: 'UFs',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'php/lista_ufs.php',
		reader: {
			type: 'json', //json ou xml
			root: 'ufs',
			fields: [
				{name: 'id', type: 'int', mapping: 'estado_id'},
				{name: 'nome', type: 'string', mapping: 'estado_nome'}
			]
		}
	}

});

Ext.define('Cidades', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'localidade_id', type: 'int'},
		{name: 'localidade_nome', type: 'string'}
	]

});

var ds_cidade = Ext.create('Ext.data.Store', {
	storeID: 'CidadesStore',
	model: 'Cidades',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'php/lista_cidades.php',
		reader: {
			type: 'json', //json ou xml
			root: 'cidades',
			fields: [
				{name: 'id', type: 'int', mapping: 'localidade_id'},
				{name: 'nome', type: 'string', mapping: 'localidade_nome'}
			]
		}
	}

});

Ext.define('Polos', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'id', type: 'int'},
		{name: 'sisquali_id', type: 'string'},
		{name: 'nome', type: 'string'}
	]

});

var ds_polo = Ext.create('Ext.data.Store', {
	storeID: 'PolosStore',
	model: 'Polos',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'php/lista_polos.php',
		reader: {
			type: 'json', //json ou xml
			root: 'polos',
			fields: [
				{name: 'id', type: 'int', mapping: 'id'},
				{name: 'sisquali_id', type: 'string', mapping: 'sisquali_id'},
				{name: 'nome', type: 'string', mapping: 'nome'}
			]
		}
	}

});

Ext.define('Cursos', {
	extend: 'Ext.data.Model',

	fields: [
		{name: 'id', type: 'int'},
		{name: 'sisquali_id', type: 'string'},
		{name: 'nome', type: 'string'}
	]

});

var ds_curso = Ext.create('Ext.data.Store', {
	storeID: 'CursosStore',
	model: 'Cursos',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'php/lista_Cursos.php',
		reader: {
			type: 'json', //json ou xml
			root: 'cursos',
			fields: [
				{name: 'id', type: 'int', mapping: 'id'},
				{name: 'sisquali_id', type: 'string', mapping: 'sisquali_id'},
				{name: 'nome', type: 'string', mapping: 'nome'}
			]
		}
	}

});

Ext.onReady(function() {

	Ext.create('Ext.form.ComboBox', {
		fieldLabel: 'Destinatários',
		store: tipoDestinatario,
		queryMode: 'remote',
		displayField: 'nome',
		valueField: 'id',
		allowBlank: false,
		value: 1,
		forceSelection: true,
		renderTo: qlsms_filtro01
	});

	Ext.create('Ext.form.Panel', {
		title: 'Filtros',
		frame: false,
		renderTo: 'qlsms_filtro02',
		layout: 'column',
		border: false,
		bodyPadding: 20,
		collapsible: true,
		defaultType: 'textfield',
		items: [{
			fieldLabel: 'Nome',
			name: 'filt_nome',
			columnWidth: .50,
			style: 'margin-right:50px;'
		},{
			fieldLabel: 'Data Inicial',
			name: 'filt_di',
			columnWidth: .25,
			style: 'margin-right:50px;',
			xtype: 'datefield'
		},{
			fieldLabel: 'Data Final',
			name: 'filt_df',
			columnWidth: .25,
			style: 'margin-right:50px;',
			xtype: 'datefield'
		},{
			fieldLabel: 'UF',
			name: 'filt_uf',
			columnWidth: .50,
			style: 'margin-right:50px;',
			xtype: 'combobox',
			store: ds_uf,
			displayField: 'estado_nome',
			valueField: 'estado_id'
		},{
			fieldLabel: 'Polo',
			name: 'filt_polo',
			columnWidth: .50,
			xtype: 'combobox',
			store: ds_polo,
			displayField: 'nome',
			valueField: 'id'
		},{
			fieldLabel: 'Cidade',
			name: 'filt_cidade',
			columnWidth: .50,
			style: 'margin-right:50px;',
			xtype: 'combobox',
			store: ds_cidade,
			displayField: 'localidade_nome',
			valueField: 'localidade_id',
			typeAhead: true,
			emptyText: 'Escolha uma Cidade...',
			triggerAction: 'all',
			mode: 'remote'
		},{
			fieldLabel: 'Curso',
			name: 'filt_curso',
			columnWidth: .50,
			xtype: 'combobox',
			store: ds_curso,
			displayField: 'nome',
			valueField: 'id'
		}],
		buttons: [{
			text: 'Filtrar'
		}]
	});

	Ext.create('Ext.grid.Panel', {
		title: 'Polos',
		store: ds_polo,
		columns: [
			{ text: 'Id', dataIndex: 'id'},
			{ text: 'Sisquali', dataIndex: 'sisquali_id'},
			{ text: 'Nome', dataIndex: 'nome'}
		],
		height: 200,
		width: 400,
		renderTo: 'qlsms_lista01'
	});

});

