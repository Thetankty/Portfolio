function drawLines() {
    var svg = document.getElementById('skill-lines');
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }

    var centerSkill = document.getElementById('skill-1').getBoundingClientRect();
    var centerX = centerSkill.left + centerSkill.width / 2;
    var centerY = centerSkill.top + centerSkill.height / 2;

    var skills = document.getElementsByClassName('skill');
    for (var i = 0; i < skills.length; i++) {
        if (skills[i].id !== 'skill-1') { // Exclude the central "Skills" circle
            var skill = skills[i].getBoundingClientRect();
            var skillX = skill.left + skill.width / 2;
            var skillY = skill.top + skill.height / 2;

            var line = document.createElementNS('http://www.w3.org/2000/svg','line');
            line.setAttribute('x1', centerX);
            line.setAttribute('y1', centerY);
            line.setAttribute('x2', skillX);
            line.setAttribute('y2', skillY);
            line.setAttribute('stroke', 'white');
            svg.appendChild(line);
        }
    }     
}

window.onload = function() {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = 'skill-lines';
    svg.style.width = '100vw';
    svg.style.height = '100vh';
    svg.style.position = 'fixed';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.zIndex = '-1';
    document.body.appendChild(svg);

    drawLines();
}

window.onresize = drawLines;