document.write(`<nav class='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
    <a class='navbar-brand' href='#'>Mr Harford's Classwork</a>
    <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExampleDefault'
            aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>
        <span class='navbar-toggler-icon'></span>
    </button>

    <div class='collapse navbar-collapse' id='navbarsExampleDefault'>
        <ul class='navbar-nav mr-auto'>
            <li class='nav-item'>
                <a class='nav-link' href='#'>Home</a>
            </li>
            <!--            <li class='nav-item'>-->
            <!--                <a class='nav-link' href='#'>Link</a>-->
            <!--            </li>-->
            <!--            <li class='nav-item'>-->
            <!--                <a class='nav-link' href='#'>Disabled</a>-->
            <!--            </li>-->
            <li class='nav-item dropdown'>
                <a class='nav-link dropdown-toggle' href='https://example.com' id='dropdown01' data-toggle='dropdown'
                   aria-haspopup='true' aria-expanded='false'>9TEC</a>
                <div class='dropdown-menu' aria-labelledby='dropdown01'>
                    <a class='dropdown-item' href='9tec-logo.html'>Personal logo</a>
                    <a class='dropdown-item' href='9tec-parachute.html'>Mars Rover Parachute</a>
                    <a class='dropdown-item' href='9tec-ecocup.html'>Eco Cup</a>
                </div>
            </li>
            <li class='nav-item dropdown'>
                <a class='nav-link dropdown-toggle' href='https://example.com' id='dropdown01' data-toggle='dropdown'
                   aria-haspopup='true' aria-expanded='false'>10TEC</a>
                <div class='dropdown-menu' aria-labelledby='dropdown01'>
                    <a class='dropdown-item' href='10tec-microbits.html'>Micro:bit</a>
                    <a class='dropdown-item' href='10tec-mousetrapcar.html'>Mousetrap Car</a>
                    <a class='dropdown-item' href='#'>Something else here</a>
                </div>
            </li>
        </ul>
    </div>
</nav>`);