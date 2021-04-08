package server;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.plugin.PluginManager;
import org.bukkit.plugin.java.JavaPlugin;

public class Main extends JavaPlugin {

	
	private void registerEvents () {
		PluginManager pluginManager = Bukkit.getServer().getPluginManager();
		
		pluginManager.registerEvents(new JoinPlayerEvent(), this);
	}
	
	public void onEnable () {
		this.registerEvents();
		Bukkit.getConsoleSender().sendMessage(ChatColor.GREEN + "Oi Hello World");
	}
	
	public void onDisable () {
		Bukkit.getConsoleSender().sendMessage(ChatColor.GREEN + "Tchau Hello World");
	}
}