@extends('layouts.app')
@section('header_styles')
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
@stop

@section('content')
    <div id="app"></div>
@endsection

@section('footer_styles')
    <script src="{{ asset('js/main.js') }}"></script>
@stop

