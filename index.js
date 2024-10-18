const connections = {
    a: { front: 'b', back: 'e', left: 'c', right: 'd', text: 'A Symbol of Colonial Legacy<br>The Gateway of India, located in Mumbai, was built during the British Raj and stands as a symbol of colonial legacy in India. Completed in 1924, it was initially constructed to commemorate the visit of King George V and Queen Mary to India in 1911. The imposing structure is a blend of Hindu and Muslim architectural styles, reflecting the diverse cultural influences that have shaped India\'s history.' },
    b: { front: null, back: 'a', left: null, right: null, text: 'Architectural Marvel by the Arabian Sea<br>Perched on the waterfront of the Arabian Sea, the Gateway of India is an architectural marvel that has become synonymous with Mumbai\'s identity. The structure, made from yellow basalt and reinforced concrete, features intricate latticework and arched doorways, creating a majestic entrance to the city. Its design draws inspiration from the triumphal arches of ancient Rome, lending the monument a timeless grandeur.' },
    c: { front: null, back: null, left: null, right: 'a', text: 'Witness to Historical Events<br>The Gateway of India has witnessed several significant historical events, including the departure of British troops from India in 1948, marking the end of colonial rule. Over the years, it has also served as a ceremonial entrance for important dignitaries and a backdrop for various political and social movements, embedding itself deeply into the fabric of Indian history.' },
    d: { front: null, back: null, left: 'a', right: null, text: 'A Hub for Tourists and Locals Alike<br>Today, the Gateway of India is one of Mumbai\'s most popular tourist attractions, drawing visitors from all over the world. The area around the monument is always bustling with activity, from street vendors selling souvenirs to photographers offering to capture the perfect shot. For many locals, the Gateway is a place to relax, enjoy the sea breeze, and take in the stunning views of the Mumbai skyline.' },
    e: { front: 'a', back: null, left: null, right: null, text: 'Symbol of Resilience and Unity<br>Beyond its historical and architectural significance, the Gateway of India has come to symbolize the resilience and unity of the people of Mumbai. In times of crisis, such as the 2008 Mumbai attacks, the monument became a gathering place for citizens to mourn and stand in solidarity. It continues to be a powerful emblem of the city\'s enduring spirit and collective strength.' }
};
let currentLocation = 'a';
function updateView(location) {
    document.getElementById('sky').setAttribute('src', `#${location}`);
    const text = connections[location].text;
    document.getElementById('text-overlay').innerHTML = text;
    speakText(text.replace(/<br>/g, ' ')); // Speak the text without the <br> tags
    currentLocation = location;
}
function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
}
document.getElementById('front').addEventListener('click', function() {
    if (connections[currentLocation].front) {
        updateView(connections[currentLocation].front);
    }
});
document.getElementById('back').addEventListener('click', function() {
    if (connections[currentLocation].back) {
        updateView(connections[currentLocation].back);
    }
});
document.getElementById('left').addEventListener('click', function() {
    if (connections[currentLocation].left) {
        updateView(connections[currentLocation].left);
    }
});
document.getElementById('right').addEventListener('click', function() {
    if (connections[currentLocation].right) {
        updateView(connections[currentLocation].right);
    }
});