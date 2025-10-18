import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    elevation: 2,
    marginBottom: 20,
  },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 4, color: '#333' },
  subtitle: { fontSize: 16, color: '#777' },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 15,
    color: '#444',
  },
  timelineCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
  },
  timelineTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  eventRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timeline: {
    alignItems: 'center',
    width: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  line: {
    flex: 1,
    width: 2,
    backgroundColor: '#ddd',
  },
  eventContent: {
    flex: 1,
    marginLeft: 10,
  },
  eventType: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 6,
    color: '#333',
  },
  eventDate: {
    fontSize: 13,
    color: '#888',
    marginTop: 4,
  },
  eventDetails: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  notFoundStyle: { fontSize: 16 },
  row: { flexDirection: 'row', alignItems: 'center' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginLeft: 10,
  },
  badgeText: { color: '#fff', fontWeight: '600' },
});
