package csc309.ENC.pingme.dummy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Dummy class used to demonstrate UI and functionality of friends list related 
 * activities. Dummy items represent accounts of friends 
 */
public class DummyContent {

	/**
	 * An array of sample (dummy) items.
	 */
	public static List<DummyItem> ITEMS = new ArrayList<DummyItem>();

	/**
	 * A map of sample (dummy) items, by ID.
	 */
	public static Map<String, DummyItem> ITEM_MAP = new HashMap<String, DummyItem>();

	static {
		// Add 3 sample items.
		addItem(new DummyItem("1", "Nicholas Pham", "34 seconds ago"));
		addItem(new DummyItem("2", "Cristian Nanan", "56 minutes ago"));
		addItem(new DummyItem("3", "Edward Kao", "78 hours ago"));
		addItem(new DummyItem("1337", "Mashiyat The Great", "1 second ago"));
	}

	private static void addItem(DummyItem item) {
		ITEMS.add(item);
		ITEM_MAP.put(item.id, item);
	}

	/**
	 * A dummy item representing a piece of content.
	 */
	public static class DummyItem {
		public String id;
		public String name;
		public String lastPing;

		public DummyItem(String id, String name, String lastPing) {
			this.id = id;
			this.name = name;
			this.lastPing = lastPing;
		}

		@Override
		public String toString() {
			return name;
		}
	}
}
