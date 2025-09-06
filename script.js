   
        // Sample event data with images
        const events = [
            {
                id: 1,
                title: "Summer Music Festival",
                description: "Join us for an unforgettable night of music under the stars with top artists from around the world.",
                date: "2024-07-15",
                time: "7:00 PM",
                location: "Central Park, New York",
                category: "music",
                city: "new-york",
                price: "$89",
                image: "https://images.unsplash.com/photo-1704703337823-d9165d05be13?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                fullDescription: "Experience the magic of live music at our annual Summer Music Festival. Featuring headlining acts from multiple genres including rock, pop, electronic, and indie. Food trucks, craft beverages, and merchandise will be available throughout the venue. Gates open at 5:00 PM with the first act starting at 7:00 PM. This is an all-ages event with designated areas for families."
            },
            {
                id: 2,
                title: "Tech Innovation Summit",
                description: "Explore the latest in technology trends and network with industry leaders in this comprehensive summit.",
                date: "2024-08-22",
                time: "9:00 AM",
                location: "Convention Center, San Francisco",
                category: "tech",
                city: "san-francisco",
                price: "$299",
                image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                fullDescription: "The Tech Innovation Summit brings together thought leaders, entrepreneurs, and tech enthusiasts for a full day of insights into emerging technologies. Sessions cover AI, blockchain, IoT, and sustainable tech solutions. Includes networking lunch, exhibition hall, and hands-on workshops. Perfect for professionals looking to stay ahead of industry trends."
            },
            {
                id: 3,
                title: "Art Gallery Opening",
                description: "Discover contemporary art from local and international artists in this exclusive gallery opening.",
                date: "2024-07-08",
                time: "6:00 PM",
                location: "Modern Art Museum, Los Angeles",
                category: "art",
                city: "los-angeles",
                price: "Free",
                image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                fullDescription: "Join us for the opening of 'Visions of Tomorrow', featuring works from 25 contemporary artists exploring themes of technology, environment, and human connection. The exhibition includes paintings, sculptures, digital art, and interactive installations. Wine and hors d'oeuvres will be served. Artist talks begin at 7:30 PM."
            },
            {
                id: 4,
                title: "Food & Wine Tasting",
                description: "Savor exquisite cuisine paired with premium wines from renowned chefs and sommeliers.",
                date: "2024-08-05",
                time: "5:30 PM",
                location: "Rooftop Terrace, Chicago",
                category: "food",
                city: "chicago",
                price: "$125",
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                fullDescription: "An evening of culinary excellence featuring five-course tasting menu prepared by award-winning chefs, paired with carefully selected wines from boutique vineyards. Each course tells a story of seasonal ingredients and innovative techniques. Limited to 60 guests for an intimate dining experience. Dress code: business casual."
            },
            {
                id: 5,
                title: "Marathon Championship",
                description: "Watch elite athletes compete in the annual city marathon championship race.",
                date: "2024-09-12",
                time: "7:00 AM",
                location: "Downtown Circuit, Chicago",
                category: "sports",
                city: "chicago",
                price: "$25",
                image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                fullDescription: "The annual city marathon features elite runners from around the world competing for the championship title. The 26.2-mile course winds through the city's most scenic neighborhoods. Spectator areas located at multiple points along the route. Awards ceremony follows at 2:00 PM. Family-friendly event with activities for children."
            },
            {
                id: 6,
                title: "Jazz Night",
                description: "Experience smooth jazz performances from local and touring musicians in an intimate venue.",
                date: "2024-07-28",
                time: "8:00 PM",
                location: "Blue Note Club, New York",
                category: "music",
                city: "new-york",
                price: "$45",
                image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                fullDescription: "An intimate evening of jazz featuring both established and emerging artists. The lineup includes a mix of traditional jazz standards and contemporary interpretations. The venue offers craft cocktails and light appetizers. Seating is limited to ensure an intimate atmosphere. Two sets: 8:00 PM and 10:00 PM."
            }
        ];
        
        // Function to format date
        function formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
            });
        }
        
        // Function to render events
        function renderEvents(eventsToRender = events) {
            const eventsGrid = document.getElementById('eventsGrid');
            eventsGrid.innerHTML = '';
            
            eventsToRender.forEach((event, index) => {
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card';
                eventCard.style.animationDelay = `${index * 0.1}s`;
                
                eventCard.innerHTML = `
                    <div class="event-image">
                        <img src="${event.image}" alt="${event.title}">
                        <div class="event-date-badge">${formatDate(event.date)}</div>
                    </div>
                    <div class="event-content">
                        <h3 class="event-title">${event.title}</h3>
                        <p class="event-description">${event.description}</p>
                        <div class="event-details">
                            <div class="event-detail">
                                <i class="event-detail-icon fas fa-calendar-alt"></i>
                                ${formatDate(event.date)} at ${event.time}
                            </div>
                            <div class="event-detail">
                                <i class="event-detail-icon fas fa-map-marker-alt"></i>
                                ${event.location}
                            </div>
                        </div>
                        <div class="event-price">${event.price}</div>
                        <button class="event-btn" onclick="openModal(${event.id})">Learn More</button>
                    </div>
                `;
                
                eventsGrid.appendChild(eventCard);
            });
        }
        
        // Function to filter events
        function filterEvents() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const categoryFilter = document.getElementById('categoryFilter').value;
            const locationFilter = document.getElementById('locationFilter').value;
            
            const filteredEvents = events.filter(event => {
                const matchesSearch = event.title.toLowerCase().includes(searchTerm) || 
                                     event.description.toLowerCase().includes(searchTerm);
                const matchesCategory = !categoryFilter || event.category === categoryFilter;
                const matchesLocation = !locationFilter || event.city === locationFilter;
                
                return matchesSearch && matchesCategory && matchesLocation;
            });
            
            renderEvents(filteredEvents);
        }
        
        // Function to open event modal
        function openModal(eventId) {
            const event = events.find(e => e.id === eventId);
            const modal = document.getElementById('eventModal');
            const modalContent = document.getElementById('modalContent');
            const modalImage = document.getElementById('modalImage');
            
            modalImage.innerHTML = `<img src="${event.image}" alt="${event.title}">`;
            
            modalContent.innerHTML = `
                <h2 style="color: #041b01; margin-bottom: 1rem;">${event.title}</h2>
                <div style="margin: 1rem 0;">
                    <div class="event-detail" style="margin-bottom: 0.5rem;">
                        <i class="event-detail-icon fas fa-calendar-alt"></i>
                        <strong>${formatDate(event.date)} at ${event.time}</strong>
                    </div>
                    <div class="event-detail" style="margin-bottom: 0.5rem;">
                        <i class="event-detail-icon fas fa-map-marker-alt"></i>
                        <strong>${event.location}</strong>
                    </div>
                    <div class="event-price" style="font-size: 1.5rem; margin: 1rem 0; color: #0a3803;">${event.price}</div>
                </div>
                <p style="line-height: 1.6; color: #555; margin-bottom: 2rem;">${event.fullDescription}</p>
                <button class="event-btn" style="font-size: 1.1rem; padding: 1rem 2rem;">Book Now</button>
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        // Function to close modal
        function closeModal() {
            const modal = document.getElementById('eventModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Event listeners
        document.getElementById('searchInput').addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                filterEvents();
            }
        });
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('eventModal');
            if (event.target === modal) {
                closeModal();
            }
        }
        
        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderEvents();
        });
    